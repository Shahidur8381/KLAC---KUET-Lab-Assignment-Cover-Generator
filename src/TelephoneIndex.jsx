import React from 'react';
import { teachersData } from './data/teachers';

export default function TelephoneIndex() {
    return (
        <div className="telephone-index-container">
            <h1 className="index-title">CSE Telephone Index</h1>
            <div className="table-responsive">
                <table className="telephone-table">
                    <thead>
                        <tr>
                            <th>Sl.</th>
                            <th>Name</th>
                            <th>KUET Ext.</th>
                            <th>Room No.</th>
                            <th>Mobile</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {teachersData.map(teacher => (
                            <tr key={teacher.id}>
                                <td>{teacher.id}</td>
                                <td>{teacher.name}</td>
                                <td>{teacher.ext}</td>
                                <td>{teacher.room}</td>
                                <td>{teacher.mobile}</td>
                                <td><a href={`mailto:${teacher.email}`}>{teacher.email}</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
