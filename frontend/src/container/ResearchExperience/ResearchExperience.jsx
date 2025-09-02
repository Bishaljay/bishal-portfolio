import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tooltip as ReactTooltip } from 'react-tooltip'; // ✅ Correct import

import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './ResearchExperience.scss';

const ResearchExperience = () => {
  const [research, setResearch] = useState([]);

  useEffect(() => {
    const query = '*[_type == "researchExperiences"]'; // Sanity collection for research
    client.fetch(query).then((data) => {
      setResearch(data);
    });
  }, []);

  return (
    <>
      <h2 className="head-text">Research <span>Experience</span></h2>

      <div className="app__research-container">
        {research.map((res) => (
          <div key={res.year} className="app__research-item">
            <div className="app__research-year">
              <p className="bold-text">{res.year}</p>
            </div>

            <motion.div className="app__research-works">
              {res.projects.map((project) => (
                <React.Fragment key={project.title}>
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                    className="app__research-work"
                    data-tooltip-id={project.title}
                    data-tooltip-content={project.desc}
                  >
                    <h4 className="bold-text">{project.title}</h4>
                    <p className="p-text">{project.institution}</p>
                  </motion.div>

                  <ReactTooltip
                    id={project.title}
                    className="research-tooltip"
                    place="top"
                  />
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(ResearchExperience, 'app__research'),
  'research',
  'app__whitebg'
);
