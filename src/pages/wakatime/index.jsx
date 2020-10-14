/* eslint-disable react/forbid-prop-types */
import React from 'react';
import { Layout, Row } from 'antd';
import Header from '../../components/PageLayout/Header';
import SEO from '../../components/Seo';
import SidebarWrapper from '../../components/PageLayout/Sidebar';

import WakaTimeImage, { WakaTimeTypes } from '../../components/WakaTimeImage';

const WakaTime = () => (
  <Layout className="outerPadding">
    <Layout className="container">
      <Header />
      <SEO
        title="WakaTime"
        description="This page consists of various Tags on various technologies that I'll be using
          to write blogs. You can check the blogs related to the tags by clicking on any of the tags below."
        path="wakatime"
      />
      <SidebarWrapper>
        <>
          <div className="marginTopTitle">
            <h1 className="titleSeparate">WakaTime Activities</h1>
          </div>
          <Row gutter={[20, 20]}>
            {
              WakaTimeTypes.map((val) => (
                <WakaTimeImage type={val} />
              ))
            }
          </Row>
        </>
      </SidebarWrapper>
    </Layout>
  </Layout>
);

export default WakaTime;
