import React from "react";
import { Nav } from "shards-react";

import SidebarNavItem from "./SidebarNavItem";
import { Store } from "../../../flux";

class SidebarNavItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            navItems: Store.getSidebarItems()
        };

        this.onChange = this.onChange.bind(this);
    }

    componentWillMount() {
        Store.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        Store.removeChangeListener(this.onChange);
    }

    onChange() {
        this.setState({
            ...this.state,
            navItems: Store.getSidebarItems()
        });
    }

    number = 0;

    itemNav(nameNav, idx, item) {
        this.number++;
        return (
            <div key={idx}>
                <h4
                    style={{
                        borderTopStyle: "solid",
                        borderTopWidth: "thin",
                        textTransform: "uppercase",
                        fontWeight: "600",
                        fontSize: "12px",
                        letterSpacing: "1px",
                        color: "rgb(138, 147, 165)",
                        padding: "10px 20px 0px",
                        margin: "10px 0px 0px"
                    }}
                >
                    {nameNav}
                </h4>
                <SidebarNavItem key={idx} item={item} />
            </div>
        );
    }

    render() {
        const { navItems: items } = this.state;
        return (
            <div className="nav-wrapper">
                <Nav className="nav--no-borders flex-column">
                    {items.map((item, idx) => {
                        switch (item.title) {
                            case "ManageUser":
                                return this.itemNav("User", idx, item);
                            case "ManagePersonContact":
                                return this.itemNav("Person", idx, item);
                            // case 'ManagePersonContact':
                            //   return itemNav("Address", idx, item);;
                            case "ManageAddress":
                                return this.itemNav("Address", idx, item);
                            case "ManageEquipment":
                                return this.itemNav("Equipment", idx, item);
                            case "ManageRequestGeneral":
                                return this.itemNav("Request", idx, item);
                            case "ManageNews":
                                return this.itemNav("News", idx, item);
                            case "ManageImage":
                                return this.itemNav("Image", idx, item);
                            case "ManageMessage":
                                return this.itemNav("Message", idx, item);
                            case "ManageModify":
                                return this.itemNav("Modify", idx, item);
                            case "ManagePriority":
                                return this.itemNav("Priority", idx, item);
                            case "ManageImpact":
                                return this.itemNav("Impact", idx, item);
                            case "Report":
                                return this.itemNav("Report", idx, item);
                            default:
                                return <SidebarNavItem key={idx} item={item} />;
                        }
                    })}
                </Nav>
            </div>
        );
    }
}

export default SidebarNavItems;
