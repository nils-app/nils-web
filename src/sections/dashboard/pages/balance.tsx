import React from "react";
import { Row, Col } from "react-bootstrap";
import Helmet from "react-helmet";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine
} from "recharts";

import Header from "../components/Header";

const sampleData = [
  {
    name: "Jan",
    2018: 40,
    2019: 14,
  },
  {
    name: "Feb",
    2018: 45,
    2019: 24,
  },
  {
    name: "Mar",
    2018: 60,
    2019: 98,
  },
  {
    name: "May",
    2018: 10,
    2019: 15,
  },
  {
    name: "Jun",
    2018: 18.9,
    2019: 48,
  },
  {
    name: "Jul",
    2018: 23.9,
    2019: 58,
  },
  {
    name: "Aug",
    2018: 34.9,
    2019: 70,
  },
  {
    name: "Sep",
    2018: 5,
    2019: 10,
  },
  {
    name: "Oct",
    2018: 14,
    2019: 0,
  },
  {
    name: "Nov",
    2018: 34.9,
    2019: 0,
  },
];

export default () => {
  return (
    <>
      <Helmet>
        <title>Balance history</title>
      </Helmet>
      <div className="header bg-gradient">
        <Header />
      </div>
      <Row className="content padded">
        <Col>
          <div className="dashboard-widget">
            <h2>Balance history</h2>
            <ResponsiveContainer width='100%' height={300}>
              <LineChart
                data={sampleData}
                margin={{
                  top: 5, right: 30, left: 20, bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <ReferenceLine x="May" stroke="#512c62" />
                <ReferenceLine x="Sep" stroke="#512c62" />
                <Tooltip />
                <Legend />
                <Line
                  type="linear"
                  dataKey="2018"
                  stroke="#f75f00"
                  animationDuration={500}
                />
                <Line
                  type="linear"
                  dataKey="2019"
                  stroke="#c93838"
                  animationDuration={500}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Col>
      </Row>
    </>
  );
};
