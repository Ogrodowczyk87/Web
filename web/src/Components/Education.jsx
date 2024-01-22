import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';


function Education() {
    return (
        <div className="education">
            <VerticalTimeline lineColor="yellow" >
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2009 - 2012"
                    iconStyle={{ background: 'purple', color: '#fff' }}
                    icon={<SchoolIcon />}>
                    <h3 className="vertical-timeline-element-title">GWSH Silesian Higher School of Economics, Wojciecha Korfantego in Katowicach
                    </h3>
                    <p>
                        Degree in International Relations
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2022  - current"
                    iconStyle={{ background: 'purple', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">IT School GoIT, Full Stack Developer
                    </h3>
                    <p className="vertical-timeline-element-des">
                        Degree in International Relations
                    </p>

                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="20.09.2013 - 30.02.2015 "
                    iconStyle={{ background: "purple", color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Arla Hatfield - Warehouse Operative
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="30.02.2015 -  30.06.2021 "
                    iconStyle={{ background: "purple", color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">NFT Distribution - Warehouseman
                    </h3>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="1.07.2021 - 15.09.2022 "
                    iconStyle={{ background: "purple", color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Euro Polymers Group – Roofer
                    </h3>
                    <p>Precisely cut felt, shingles and strips of flashing to fit angles formed by walls, vents and intersecting roof surfaces
                    </p>
                    <p>Managed inventory of roofing supplies and material
                    </p>
                    <p>Removed imperfections and applied chemical solutions to treat materials and achieve smooth finishes
                    </p>
                    <p>Determined materials needed for daily shift and loaded vehicles with equipment and supplies
                    </p>
                    <p>Removed old roofing material and properly disposed of all debris to maintain clean, organized work sites
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="20.09.2022 - current"
                    iconStyle={{ background: "purple", color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Amazon -  Warehouse Operative
                    </h3>
                    <p>Picking and packing</p>
                    <p>Making sure all stock is labelled and stored correctly</p>
                    <p>Carrying out health and safety checks</p>
                    <p>Carrying out health and safety checks</p>
                    <p>Physically and mentally fit</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="30.09.2023 - current"
                    iconStyle={{ background: "purple", color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">RYOBI
                    </h3>
                    <p>Machine Operator</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education;

