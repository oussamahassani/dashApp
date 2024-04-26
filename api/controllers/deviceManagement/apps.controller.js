import IoTDevice from '../../models/app_management/iotDevice.model.js';
import Armoire from '../../models/app_management/armoir.model.js'
import CompteurIoT from '../../models/app_management/compteurIOT.model.js'
import Transformateur from '../../models/app_management/Transformateur.modele.js'
export const addApp = async (req, res) => {
    try {
        let device = null;
        if (req.body.typeDevice == "armoire") {
            device = await Armoire.create({
                ...req.body.device
            });
        }
        else if (req.body.typeDevice == "transformateur") {
            device = await Transformateur.create({
                ...req.body.device
            });
        }
        else if (req.body.typeDevice == "groupe") {
            device = await CompteurIoT.create({
                ...req.body.device
            });
        }
        if (device && device._id) {
            device = device._id
        }
        const newData = await IoTDevice.create({
            ...req.body, relationDevice: device
        });

        // Send response
        res.status(200).json({ msg: "new apareil was created ", data: newData });

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const updateApp = () => {

}

export const deleteApp = async (req, res) => {
    try {
        let deviceId = req.params.id;
        // Check if user exists
        const iot = await IoTDevice.findById(deviceId);
        if (!iot) {
            throw new Error("device not found");
        }

        // Delete user
        await iot.remove();

        return res.status(200).json({ msg: "device delete success" });
    } catch (error) {
        throw new Error(`Error deleting user: ${error.message}`);
    }
}

export const getApp = async (req, res) => {
    try {
        let deviceId = req.params.id;
        const devices = await IoTDevice.findById(deviceId);
        let relationDevice = null;
        if (devices && devices.typeDevice != null) {
            console.log(devices)
            console.log(devices.relationDevice)
            if (devices.typeDevice == "armoire") {
                relationDevice = await Armoire.findById(devices.relationDevice);
            }
            else if (devices.typeDevice == "transformateur") {
                relationDevice = await Transformateur.findById(devices.relationDevice);
            }
            else if (devices.typeDevice == "groupe") {
                relationDevice = await CompteurIoT.findById(devices.relationDevice);
            }
        }

        return res.status(200).json({ msg: "device delete success", devices, relationDevice });
    } catch (error) {
        throw new Error(`Error geting  device: ${error.message}`);
    }
}

export const getAllApps = async (req, res) => {
    try {

        const devices = await IoTDevice.find();


        return res.status(200).json({ msg: "success", devices });
    } catch (error) {
        throw new Error(`Error geting device: ${error.message}`);
    }
}