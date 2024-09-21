import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { data } from '../../data/experience';

function Education () {
  return (
    <div className="section" id="education">
    <VerticalTimeline lineColor="rgba(0,0,0,0.8)">
      {data.experience.map((item) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{backgroundColor: "transparent", color: '#000', boxShadow: 'none'}}
          contentArrowStyle={{ borderRight: '7px solid rgba(0,0,0,0.8)' }}
          date={item.date}
          iconStyle={{ background: '#e0d6ff', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'none', cursor: 'pointer' }}
          icon={item.icon}
          iconOnClick={() => window.open(item.link, "_blank")}
        >
          <h3 className="timeline title">{item.title}</h3>
          <h4 className="timeline location">{item.location}</h4>
          <p className="timeline description">{item.description}</p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  </div>
)}

export default Education;