import React from 'react';
import { formatDateDDMMYY } from './utils';

export default function LabPreview({ data }) {
    return (
        <div className="preview-card">
            <div className="page lab-page" id="lab-page">
                <div className="lab-shell">
                    <div className="lab-heading">
                        <img src="/KUET.png" alt="KUET Logo" />
                        <div className="lab-uni">
                            <h3>Khulna University of Engineering &amp; Technology</h3>
                            <div className="kuet">KUET</div>
                        </div>
                    </div>

                    <div className="lab-title-container">
                        <div className="lab-title">SESSIONAL REPORT</div>
                    </div>

                    <div className="lab-center-row">
                        <span className="label">Course No. :</span> 
                        <span className="lab-value">{data.courseNo}</span>
                    </div>
                    
                    <div className="lab-meta-title">{data.department}</div>
                    
                    <div className="lab-meta-row">
                        <span className="label">Experiment No. : <span className="lab-value-underlined">{data.experimentNo}</span></span>
                    </div>
                    <div className="lab-meta-row">
                        <span className="label">Name of the Experiment : <span className="lab-value-underlined">{data.experimentName}</span></span>
                    </div>

                    <div className="lab-remarks">
                        <div className="title">Remarks</div>
                        <div className="content"></div>
                    </div>

                    <div className="lab-footer">
                        <div>
                            <p><span className="label green">Date of Performance :</span> <span className="lab-footer-val">{formatDateDDMMYY(data.performanceDate)}</span></p>
                            <p><span className="label green">Date of Submission :</span> <span className="lab-footer-val">{formatDateDDMMYY(data.submissionDate)}</span></p>
                        </div>
                        <div>
                            <p><span className="label green">Name :</span> <span className="lab-footer-val">{data.studentName}</span></p>
                            <p><span className="label green">Roll No. :</span> <span className="lab-footer-val">{data.roll}</span></p>
                            <p><span className="label green">Group No. :</span> <span className="lab-footer-val">{data.group}</span></p>
                            <p><span className="label green">Year :</span> <span className="lab-footer-val">{data.year}</span></p>
                            <p><span className="label green">Term :</span> <span className="lab-footer-val">{data.term}</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
