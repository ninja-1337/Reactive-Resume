import { FaBug, FaCoffee, FaExternalLinkAlt } from 'react-icons/fa';
import { MdCode } from 'react-icons/md';
import { Trans, useTranslation } from 'react-i18next';
import { graphql, useStaticQuery } from 'gatsby';
import React, { memo } from 'react';
import Button from '../../../shared/Button';
import Heading from '../../../shared/Heading';
import * as styles from './About.module.css';

const About = ({ id }) => {
  const { t } = useTranslation();

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          version
        }
      }
    }
  `);

  return (
    <section>
      <Heading id={id} />

      <div className={styles.container}>
        <h5>{t('builder.about.donate.heading')}</h5>

        <p className="leading-loose">
          <Trans t={t} i18nKey="builder.about.donate.text">
            A<span className="font-bold">B</span>C
          </Trans>
        </p>

        <div className="mt-4 flex">
          <a
            href="https://www.buymeacoffee.com/Ninja137"
            rel="noreferrer"
            target="_blank"
          >
            <Button icon={FaCoffee}>{t('builder.about.donate.button')}</Button>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <h5>{t('builder.about.bugFeature.heading')}</h5>

        <p className="leading-loose">{t('builder.about.bugFeature.text')}</p>

        <div className="mt-4 flex">
          <a
            href="https://github.com/ninja-1337/Reactive-Resume"
            rel="noreferrer"
            target="_blank"
          >
            <Button icon={FaBug}>{t('builder.about.bugFeature.button')}</Button>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <h5>{t('builder.about.appreciate.heading')}</h5>

        <p className="leading-loose">{t('builder.about.appreciate.text')}</p>

        <div className="mt-4 flex">
          <a href="https://evangelou.me" rel="noreferrer" target="_blank">
            <Button icon={FaExternalLinkAlt}>evangelou.me</Button>
          </a>
        </div>
      </div>

      <div className={styles.container}>
        <h5>{t('builder.about.sourceCode.heading')}</h5>

        <p className="leading-loose">{t('builder.about.sourceCode.text')}</p>

        <div className="mt-4 flex">
          <a
            href="https://github.com/ninja-1337/Reactive-Resume"
            rel="noreferrer"
            target="_blank"
          >
            <Button icon={MdCode}>
              {t('builder.about.sourceCode.button')}
            </Button>
          </a>
        </div>
      </div>

      <div className="my-4 text-center opacity-50 text-sm flex flex-col items-center justify-center">
        <Trans t={t} i18nKey="builder.about.footer">
          A
          <a href="https://evangelou.me" rel="noreferrer" target="_blank">
            B
          </a>
        </Trans>

        <span className="mt-2 font-medium">v{site.siteMetadata.version}</span>
      </div>
    </section>
  );
};

export default memo(About);
