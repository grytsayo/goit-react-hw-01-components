import React from 'react';
import styles from './Statistics.module.css'

function generateColor() {
    return '#' + Math.floor(Math.random()*16777215).toString(16)
  }

const StatisticsItem = ({ label, percentage }) => {
    return (
            <li className={styles.test} style={{
                backgroundColor: generateColor(),
              }}>
            <span>{label}</span>
            <span>{percentage}</span>
            </li>
    )
}

export default StatisticsItem;