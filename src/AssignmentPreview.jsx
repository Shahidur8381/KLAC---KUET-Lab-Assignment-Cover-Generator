import React from 'react';

export default function AssignmentPreview({ data }) {
    return (
        <div className="preview-card">
            <div className="page assignment-page" id="assignment-page">
                <div className="uni-title">
                    <div className="line-1">KHULNA UNIVERSITY OF</div>
                    <div className="line-2">ENGINEERING &amp; TECHNOLOGY</div>
                </div>

                <div className="logo-wrap">
                    <img src="/KUET.png" alt="KUET Logo" />
                </div>

                <div className="assignment-info">
                    <p><strong>Department:</strong> <span className="line">{data.department}</span></p>
                    <p><strong>Assignment no:</strong> <span className="line">{data.assignmentNo}</span></p>
                    <p><strong>Topic:</strong> <span className="topic-line">{data.topic}</span></p>
                    <p><strong>Submission Date:</strong> <span className="line">{data.submissionDate}</span></p>
                </div>

                <div className="submission-box">
                    <div className="submission-col">
                        <h3 className="box-title">Submitted TO:</h3>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'flex-start' }}>
                            {data.submittedTo.map((teacher, idx) => (
                                <div key={idx} style={{ flex: '1 1 45%', minWidth: '120px' }}>
                                    <p style={{ margin: '0 0 4px 0', fontWeight: 'bold' }}>{teacher.name}</p>
                                    <p style={{ margin: 0 }}>{teacher.designation}</p>
                                </div>
                            ))}
                        </div>
                        <p style={{ marginTop: '20px' }}>
                            {data.teacherDept ? data.teacherDept + ',' : ''}
                            <br/>Khulna University of<br/>Engineering and Technology.
                        </p>
                    </div>
                    <div className="submission-col">
                        <h3 className="box-title">Submitted BY:</h3>
                        {data.submittedBy.map((student, idx) => (
                            <div key={idx} style={{ marginBottom: '10px' }}>
                                <p style={{ margin: '0 0 4px 0' }}><strong>Name:</strong> <span>{student.studentName}</span></p>
                                <p style={{ margin: 0 }}><strong>Roll:</strong> <span>{student.roll}</span></p>
                            </div>
                        ))}
                        <p style={{ marginTop: '10px' }}><strong>Department:</strong> <span>{data.department}</span></p>
                        <p><strong>Year:</strong> <span>{data.year}</span> &nbsp;&nbsp; <strong>Semester:</strong> <span>{data.semester}</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
