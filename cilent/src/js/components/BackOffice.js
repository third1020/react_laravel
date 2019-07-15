import React from "react";
import Typography from "@material-ui/core/Typography";
import Navigation from "./Navigation";

function BackOffice() {
    const [setOpen] = React.useState(false);

    function handleDrawerOpen() {
        setOpen(true);
    }

    function handleDrawerClose() {
        setOpen(false);
    }

    return (
        <div className="root">
            <Navigation />
            <main className="content">
                <div className="toolbar" />
                <Typography paragraph>
                    <div>wellcome</div>
                </Typography>
                <Typography paragraph>
                    <div>wellcome</div>
                </Typography>
            </main>
        </div>
    );
}

export default BackOffice;
