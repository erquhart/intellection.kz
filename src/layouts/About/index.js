/* @flow */

import React from 'react';
import {mapObjIndexed, values} from 'ramda';

import Page from 'layouts/Page';
import TopManagerCard from 'components/TopManagerCard';

import styles from './index.css';

type PropsType = {
  head: Object,
};

const renderTopManagerCard = (topManager, key) => (
  <TopManagerCard key={key} {...topManager} />
);
const mapVal = (fn, obj) => values(mapObjIndexed(fn, obj));

const Homepage = (props: PropsType) => (
  <Page {...props}>
    <div className={styles.hero}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          {props.head.hero.title}
        </h1>
        <p className={styles.heroText}>
          {props.head.hero.text}
        </p>
      </div>
    </div>
    <div className={styles.video}>
      <div className={styles.videoContent}>
        <h1 className={styles.videoTitle}>
          {props.head.video.title}
        </h1>
        <p className={styles.videoText}>
          {props.head.hero.text}
        </p>
        <a className={styles.videoButton}>
          {props.head.video.buttonText}
          <img
            className={styles.playIcon}
            src="/assets/play-blue.svg"
            alt="Play"
          />
        </a>
      </div>
    </div>
    <div className={styles.team}>
      <div className={styles.teamContent}>
        <h1 className={styles.teamTitle}>
          {props.head.team.title}
        </h1>
        <p className={styles.teamText}>
          {props.head.team.text}
        </p>
      </div>
    </div>
    <div className={styles.management}>
      {mapVal(renderTopManagerCard, props.head.team.topManagers)}
    </div>
  </Page>
);

export default Homepage;
