import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../../../components/common/PageTitle";
import SmallStats from "../../../components/common/SmallStats";
import UsersOverview from "./UsersOverview";
import ReportGeneral from "./ReportGeneral";
import ReportIssues from "./ReportIssues";
import NewDraft from "../../../components/blog/NewDraft";
import Discussions from "../../../components/blog/Discussions";
import TopReferrals from "../../../components/common/TopReferrals";
import HocValidateUser from "../../../HocValidateUser";

const Report = ({ smallStats }) => (
    <Container fluid className="main-content-container px-4">
        {/* Page Header */}

        <Row noGutters className="page-header py-4">
            <PageTitle
                title="Blog Overview"
                subtitle="Dashboard"
                className="text-sm-left mb-3"
            />
        </Row>

        {/* Small Stats Blocks */}

        <Row>
            {/* Users Overview */}

            <UsersOverview />
        </Row>

        <Row>
            {/* Users Overview */}

            <ReportGeneral />

            {/* Users by Device */}

            <ReportIssues />
        </Row>
    </Container>
);

Report.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
};

Report.defaultProps = {
    smallStats: [
        {
            label: "Posts",
            value: "2,390",
            percentage: "4.7%",
            increase: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: { md: "6", sm: "6" },
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(0, 184, 216, 0.1)",
                    borderColor: "rgb(0, 184, 216)",
                    data: [1, 2, 1, 3, 5, 4, 7]
                }
            ]
        },
        {
            label: "Pages",
            value: "2500",
            percentage: "12.4",
            increase: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: { md: "6", sm: "6" },
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(23,198,113,0.1)",
                    borderColor: "rgb(23,198,113)",
                    data: [1, 2, 2, 2, 2, 2, 2]
                }
            ]
        },
        {
            label: "Comments",
            value: "8,147",
            percentage: "3.8%",
            increase: false,
            decrease: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: { md: "4", sm: "6" },
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(255,180,0,0.1)",
                    borderColor: "rgb(255,180,0)",
                    data: [2, 3, 3, 3, 4, 3, 3]
                }
            ]
        },
        {
            label: "New Customers",
            value: "29",
            percentage: "2.71%",
            increase: false,
            decrease: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: { md: "4", sm: "6" },
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(255,65,105,0.1)",
                    borderColor: "rgb(255,65,105)",
                    data: [1, 7, 1, 3, 1, 4, 8]
                }
            ]
        },
        {
            label: "ผู้ขอ",
            value: "17,281",
            percentage: "2.4%",
            increase: false,
            decrease: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: { md: "4", sm: "6" },
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgb(0,123,255,0.1)",
                    borderColor: "rgb(0,123,255)",
                    data: [3, 2, 3, 2, 4, 5, 4]
                }
            ]
        }
    ]
};

export default HocValidateUser(Report);
