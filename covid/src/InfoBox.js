import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"


function InfoBox({title,cases,total}) {
    return (
        <Card>
            <CardContent>
            <Typography  className="inforBox_title" color="textSecondary">
                {title}

             </Typography>
                <Typography  className="inforBox_cases "color="textSecondary">
                <h2>{cases}</h2>

                </Typography>

                <Typography className="inforBox_total" color="textSecondary">
                    {total} Total
                </Typography>
                
            </CardContent>

        </Card>
            
    )
}

export default InfoBox
