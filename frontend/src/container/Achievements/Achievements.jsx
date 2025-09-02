import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './Achievements.scss';

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    const query = '*[_type == "achievements"]'; // Sanity collection for achievements
    client.fetch(query).then((data) => {
      setAchievements(data);
    });
  }, []);

  return (

    <>
      <h2 className="head-text">Achievements</h2>

      <div className="app__achievements-container">
        {achievements.map((ach) => (
          <motion.div
            key={ach.title}
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className="app__achievement-item"
          >
            <h4 className="bold-text">{ach.title}</h4>
            <p className="p-text">{ach.description}</p>
            {ach.year && <span className="achievement-year">{ach.year}</span>}
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Achievements, 'app__achievements'),
  'achievements',
  'app__whitebg'
);
