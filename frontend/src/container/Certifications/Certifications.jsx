import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Certifications.scss';

const Certification = () => {
  const [certs, setCerts] = useState([]);
  const [filterCerts, setFilterCerts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "certifications"]';

    client.fetch(query).then((data) => {
      setCerts(data);
      setFilterCerts(data);
    });
  }, []);

  const handleFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterCerts(certs);
      } else {
        setFilterCerts(certs.filter((cert) => cert.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">Certifications & <span>Professional</span> Courses</h2>

      <div className="app__cert-filter">
        {['AI','AI Vector','Deep Learning', 'Java','Data Analytics','UI/UX Design', 'Cybersecurity', 'AWS', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleFilter(item)}
            className={`app__cert-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__cert-portfolio"
      >
        {filterCerts.map((cert, index) => (
          <div className="app__cert-item app__flex" key={index}>
            <div className="app__cert-img app__flex">
              {cert.certificateImg && (
                <img src={urlFor(cert.certificateImg)} alt={cert.title} />
              )}

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__cert-hover app__flex"
              >
                {cert.credentialUrl && (
                  <a href={cert.credentialUrl} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                )}
              </motion.div>
            </div>

            <div className="app__cert-content app__flex">
              <h4 className="bold-text">{cert.title}</h4>
              <p className="p-text">{cert.issuer}</p>
              {cert.issueDate && (
                <p className="p-text" style={{ marginTop: 5 }}>
                  Issued: {new Date(cert.issueDate).toLocaleDateString()}
                </p>
              )}
              {cert.credentialId && (
                <p className="p-text">Credential ID: {cert.credentialId}</p>
              )}

              <div className="app__cert-tag app__flex">
                <p className="p-text">{cert.tags?.[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Certification, 'app__certs'),
  'certifications',
  'app__primarybg'
);
