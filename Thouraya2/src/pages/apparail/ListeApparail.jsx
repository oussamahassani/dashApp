import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import newRequest from "../../utils/newRequest";
import Sidebar from "../../component/sidebar/Sidebar";

const ListeApparail = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        newRequest.get("/app")
            .then(res => {
                const rowsWithId = res.data.devices.map(row => {
                    return { ...row, id: row._id };
                });
                setData(rowsWithId)
            })
            .catch(err => console.log(err))

        return () => {

        }
    }, [])


    const handleDelete = (id) => {
        setData(data.filter((item) => item._id !== id));
    };
    const apareilColumns = [
        { field: "_id", headerName: "ID", width: 70 },
        {
            field: "device_name",
            headerName: "device_name",
            width: 230,
            renderCell: (params) => {
                return (
                    <div className="cellWithImg">

                        {params.row.device_name}
                    </div>
                );
            },
        },
        {
            field: "typeDevice",
            headerName: "Type",
            width: 230,
        },

        {
            field: "location",
            headerName: "Location",
            width: 100,
        },
        {
            field: "is_connected",
            headerName: "is_connected",
            width: 160,
            renderCell: (params) => {
                return (
                    <div className={`cellWithStatus`}>
                        {params.row.is_connected ? 'connected' : 'non connected'}
                    </div>
                );
            },
        },
    ];
    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to={`/apparails/${params.row._id}`} style={{ textDecoration: "none" }}>
                            <div className="viewButton">View</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row._id)}
                        >
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];
    return (
        <div className="home">
            <Sidebar />
            <div className="homeContainer">
                <div className="datatable">
                    <div className="datatableTitle">
                        Add New appareil
                        <Link to="/apparails/new" className="link">
                            Add New
                        </Link>
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={apareilColumns.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[9]}

                    />
                </div>
            </div>
        </div>
    );
};
export default ListeApparail;