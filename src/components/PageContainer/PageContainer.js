import React from "react";
import {Typography} from "@mui/material";
import colors from "../../utils/color";

const PageContainer = ({ title, children }) => {
    return (
        <div className="mx-20">
            <div className="my-4">
                <Typography variant="h4" color={colors.secondYellow}>{title}</Typography>
            </div>
            {children}
        </div>
    )
}

export default PageContainer;