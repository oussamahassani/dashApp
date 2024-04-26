import _ from 'underscore';
import Chance from 'chance';
import moment from 'moment';

const chance = new Chance();

const DATE_FORMAT = 'DD/MM/YYYY HH:mm';
const HOUR_FORMAT = 'HH:mm:ss';

const STATUS = [
    'AVAILABLE',
    'TALKING',
    'AFTER WORK',
    'NOT AVAILABLE'
]

let callCenter = {
    agents: [],
    statistics: {
        by: {
            status: {

            },
            calls: {
                accepted: 0,
                rejected: 0
            }
        }
    },
    alerts: []
}

/**
  * @class Engine
  * Engine of events oriented to the context of a Call Center.
  * The engine simulates the traffic of a call center and can be configured in number of Agents, also emits the status of the call center by sockets using socket.io
  * The simulator runs recursively until the web server is stopped. It can also be executed in stand alone format.
  *
  *
  * @param {JSON} options Engine configuration options
  * @param {Number} options.agent Number of agents
  * @param {Boolean} options.logger Boolean to define if the engine will display the call center status on the console
  * @param {socket.io} socket It is passed the socket through which the changes will be notified to the connected web clients
  */
function Engine(options, socket) {
    var io = socket || null;
    var agentsNumber = options.agents || 10; // 10 by default

    this.lastDaySendData = new Date().getDate();
    /**
          * Initializes the call center status, number of agents and information (mock) related to them
          */
    this.init = function () {

        for (var x = 1; x <= agentsNumber; x++) {
            var tmpName = chance.name({ nationality: 'en' });

            callCenter.agents.push({
                id: chance.guid(),
                ext: 1000 + x,
                agent: '1000' + x,
                name: tmpName.split(' ')[0][0] + '. ' + tmpName.split(' ')[1],
                status: STATUS[_.random(0, STATUS.length - 1)],
                stateChangeTime: moment().format(HOUR_FORMAT),
                teams: [
                    'Team 1',
                    'Team 2'
                ],
                skills: [
                    'Sk 1001',
                    'Sk 1002'
                ],
                statistics: {
                    by: {
                        calls: {
                            accepted: 0,
                            rejected: 0
                        }
                    }
                },
                viewMode: 0
            });
        }
    }

    /**
       * Method that starts the execution of the engine.
       */
    this.run = function () {
        let timing = _.random(0.2, 1.5) * 2000;
        callCenter.timing = timing;

        // Reset statistics every day
        if (this.lastDaySendData != new Date().getDate()) {
            callCenter.statistics.by.calls.accepted = 0;
            callCenter.statistics.by.calls.rejected = 0;

            _.forEach(callCenter.agents, (entry) => {
                entry.statistics.by.calls.accepted = 0;
                entry.statistics.by.calls.rejected = 0;
                this.lastDaySendData = new Date().getDate();
            });
        }

        setTimeout((() => {
            let samples = _.random(0, agentsNumber);
            let agentsSample = _.sample(callCenter.agents, _.random(0, samples / 2));
            callCenter.alerts = [];

            _.map(agentsSample, (entry) => {
                entry.status = _.sample(STATUS);
                entry.stateChangeTime = moment().format(HOUR_FORMAT);

                // Sim accepted and rejected calls
                // by agent and all agents
                if ('TALKING' === entry.status) {
                    entry.statistics.by.calls.accepted++;
                    callCenter.statistics.by.calls.accepted++;
                } else if ('NOT AVAILABLE' === entry.status) {
                    entry.statistics.by.calls.rejected++;
                    callCenter.statistics.by.calls.rejected++;
                }
            });

            callCenter.statistics.by.status = _.countBy(callCenter.agents, 'status');

            let rule = eval('callCenter.statistics.by.status["AVAILABLE"] == undefined');
            if (rule) {
                callCenter.alerts.push('No hay agentes disponibles!');
            }


            if (io != null) {
                io.emit('call center status', callCenter);

            }

            this.run();
        }).bind(this), timing);
    }

}

export default Engine;