import React from "react";
import Cards from "./Cards/Cards";
import "./Dashboard.css";
// import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineDollarCircle } from "react-icons/ai";
import RecentActivitiesTable from "./TableData/RecentActivitiesTable";
import LineCharts from "./Chart/LineCharts";
import TopClients from "./TableData/TopClients";
import SubscribersBarChart from "./Chart/BarChartCandidates";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import { TbBuildingSkyscraper } from "react-icons/tb";
// import CurrencyExchangeOutlinedIcon from "@mui/icons-material/CurrencyExchangeOutlined";
const Dashboard = () => {
  return (
    <>
      <div className="main-content">
        <section className="card-section">
          <div className="row-conatiner mb-4">
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="All Candidates"
              value="12,514,000"
              icon={GroupOutlinedIcon}
              iconColor="#673AB7"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Active"
              value="12,514,000"
              icon={GroupOutlinedIcon}
              iconColor="#FF5722"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Inactive"
              value="$12,514.000"
              icon={GroupOutlinedIcon}
              iconColor="#118803"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Closed"
              value="$12,514,000"
              icon={GroupOutlinedIcon}
              iconColor="#2196f3"
            />
          </div>

          <div className="row-conatiner mb-4">
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="All Companies"
              value="12,514,000"
              icon={TbBuildingSkyscraper}
              iconColor="#673AB7"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Active"
              value="12,514,000"
              icon={TbBuildingSkyscraper}
              iconColor="#FF5722"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Inactive"
              value="$12,514.000"
              icon={TbBuildingSkyscraper}
              iconColor="#118803"
            />
            <Cards
              color="#333"
              backgroundColor="#fff"
              title="Closed"
              value="$12,514,000"
              icon={TbBuildingSkyscraper}
              iconColor="#2196f3"
            />
          </div>
          <h5>Posted Jobs & Search Candidates</h5>
          <div className="row-conatiner">
            <Cards
              backgroundColor="#673ab7"
              title="Free"
              className="iconsize"
              value="$12,514,000"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
            <Cards
              backgroundColor="#1e88e5"
              title="Per Job Post"
              className="iconsize"
              value="$12,514,000"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
            <Cards
              backgroundColor="#ff5e52"
              title="Yearly"
              className="iconsize"
              value="$12,514,000"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
          </div>
          <br />
          <h5>Jobs Applied</h5>
          <div className="row-conatiner">
            <Cards
              backgroundColor="#673ab7"
              title="Free"
              className="iconsize"
              value="$12,514,000"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
            <Cards
              backgroundColor="#1e88e5"
              title="1 Month"
              className="iconsize"
              value="$12,514,000"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
            <Cards
              backgroundColor="#ff5e52"
              title="3 Monts"
              className="iconsize"
              value="$12,514,000"
              icon={AiOutlineDollarCircle}
              color="#fff"
              iconColor="#ffffff80"
            />
          </div>
        </section>

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <RecentActivitiesTable />
            </div>

            <div className="col-xl-6 col-lg-6 col-md-12">
              <TopClients />
            </div>
          </div>
        </section>

        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <LineCharts />
            </div>
          </div>
        </section>
        <section className="mt-4 mb-4">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <SubscribersBarChart />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Dashboard;
