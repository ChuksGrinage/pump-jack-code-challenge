import React from "react";
// import { AirlineData } from 'modules/types';

import './Layout.css';

interface DashBoardPageLayoutProps {
  data: any;
}

interface SectionProps {
  title: string,
  children: JSX.Element,
  hr?: boolean
}

const Section = (props: SectionProps) => (
  <section>
    <h2 style={{marginBottom: "40px", textTransform: "uppercase"}}>{props.title}</h2>
    <div>{props.children}</div>
    {props.hr && <hr style={{ height: 1, backgroundColor: "#e0e0e0", margin: "40px 0", border: "none"}}/> }
  </section>
)

const DashBoardPageLayout: React.FC<DashBoardPageLayoutProps> = ({ data }) => {

  if(!data) {
    return null;
  }

  console.log(data)
  return (
    <div className="content">
      <Section title="Summary" hr>
        <ul className="content-list">
          <li><div>${data.summary.revenue}</div>  <span>total revenue</span></li>
          <li><div>{data.summary.passengers}</div> <span>passengers</span></li>
          <li><div>${data.summary.revenue}</div> <span>revenue per pax</span></li>
          <li><div>{data.summary.onTimePerformance}% </div><span>on time performance</span></li>
        </ul>
      </Section>
      <Section title="Routes" hr>
        <>
        <ul className="content-list">
          <li><div>${data.summary.revenue} </div> <span>route pairs flown</span></li>
          <li><div>{data.routes.revenuePerRoutePair} </div><span>revenue per route pair</span></li>
          <li><div>${data.routes.revenuePerFlight}</div> <span>revenue per flight</span></li>
          <li><div>{data.routes.routePairs}% </div><span>yeild</span></li>
        </ul>
        <div className="sub-section">
          <aside>
              <table>
                <thead>
                  <tr>
                    <th>Highest Yeilding Route Pairs</th>
                  </tr>
                </thead>
                <tbody>
                <tr>
                  <th>Route Pair</th>
                  <th>RT/WK</th>
                  <th>Yield</th>
                </tr>
                  {data.routes.highestYield.map((item, index) => (
                    <tr key={index}>
                        <td>{item.from} &#8594; {item.to}</td>
                        <td>{item.roundTripsPerWeek}</td>
                        <td>{item.yield}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </aside>
          <aside>
              <table>
                <thead>
                  <tr>
                    <th>Lowest Yeilding Route Pairs</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Route Pair</th>
                    <th>RT/WK</th>
                    <th>Yield</th>
                  </tr>
                  {data.routes.lowestYield.map((item, index) => (
                    <tr key={index}>
                      <td>{item.from} ⇄ {item.to}</td>
                      <td>{item.roundTripsPerWeek}</td>
                      <td>{item.yield}%</td>
                    </tr>
                  ))}
                </tbody>
              </table>
          </aside>
        </div>
        </>
      </Section>
    </div>
  )
}

export default DashBoardPageLayout;
