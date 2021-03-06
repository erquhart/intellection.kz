import React from 'react';

import mapValues from 'utils/mapValues';
import Page from 'layouts/Page';
import {TeamMemberCard, TopManagerCard} from 'components';

import styles from './index.css';

const renderTopManagerCard = topManager => (
  <TopManagerCard
    key={`${topManager.firstName}-${topManager.lastName}`}
    teamMember={topManager}
  />
);
const renderTeamMemberCard = teamMember => (
  <TeamMemberCard
    key={`${teamMember.firstName}-${teamMember.lastName}`}
    teamMember={teamMember}
  />
);

const AboutPage = props => (
  <Page {...Page.pickPageProps(props)}>
    <div className={styles.hero}>
      <div className={styles.heroWrapper}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {props.head.hero.title}
          </h1>
          <p className={styles.heroText}>
            {props.head.hero.text}
          </p>
        </div>
      </div>
    </div>
    <div className={styles.video}>
      <div className={styles.videoWrapper}>
        <div className={styles.videoContainer}>
          <div className={styles.videoContent}>
            <h1 className={styles.videoTitle}>
              {props.head.video.title}
            </h1>
            <div className={styles.videoText}>
              {mapValues(
                (text, key) => (
                  <p key={key}><b>{text.title}</b> - {text.detail}</p>
                ),
                props.head.video.texts,
              )}
            </div>
            <a className={styles.videoButton}>
              {props.head.video.buttonText}
              <img
                className={styles.playIcon}
                src="/assets/play-blue.svg"
                alt="Play"
              />
            </a>
          </div>
          <div className={styles.videoFrame}>
            <div className={styles.videoFrameImage} />
            <div className={styles.bigPlayIconWrapper}>
              <img
                alt="Play Video"
                className={styles.bigPlayIcon}
                src="/assets/play-white.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.team}>
      <div className={styles.teamWrapper}>
        <div className={styles.teamContent}>
          <h1 className={styles.teamTitle}>
            {props.head.team.title}
          </h1>
          <p className={styles.teamText}>
            {props.head.team.text}
          </p>
        </div>
      </div>
    </div>
    <div className={styles.management}>
      <div className={styles.managementWrapper}>
        {mapValues(renderTopManagerCard)(props.head.team.topManagers)}
      </div>
    </div>
    <div className={styles.teamMembers}>
      <div className={styles.teamMembersWrapper}>
        {mapValues(renderTeamMemberCard)(props.head.team.teamMembers)}
      </div>
    </div>
  </Page>
);

export default AboutPage;
