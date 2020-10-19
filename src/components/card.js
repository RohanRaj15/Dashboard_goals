import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import DonutChart from "react-svg-donut-chart"
import { FaPlus } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleDown } from "react-icons/fa";
import { FaChevronCircleUp } from "react-icons/fa";
const dataPie = [
    { value: 80, stroke: "#989898", strokeWidth: 10 },
    { value: 20, stroke: "blue", strokeWidth: 10 }
]
const dataPie1 = [
    { value: 60, stroke: "#989898", strokeWidth: 10 },
    { value: 40, stroke: "blue", strokeWidth: 10 }
]
const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function Cards() {
    const classes = useStyles();
    return (
        <div>
            <h2><b>Your goals</b></h2>
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-4">
                        <Card className={classes.root} style={{ width: "300px", height: "330px",border:"2px solid whitesmoke" }}>
                            <CardContent>
                                <img src={process.env.PUBLIC_URL + '/assests/image1.jpeg'} alt="Not Found" style={{ width: "250px", height: "150px" }} />
                                <Typography variant="h5" component="h2">
                                    <b>Pay off student loan</b>
                                </Typography>
                                <br/>
                                <div className="row">
                                    <div className="col-md-9">
                                        <Typography variant="body2" component="p">
                                        <h6><span className="text-primary"><b>$5k</b></span>&nbsp;<b><span>/</span>&nbsp;$50k</b></h6>
                                            <h6>amount saved of goal</h6>
                                            <h6><b>$300k</b></h6>
                                            monthly
                                        </Typography>
                                    </div>
                                    <div className="col-md-3" style={{marginTop:"35px"}}>
                                        <DonutChart data={dataPie} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="mt-4">
                            <h6><b>We recommend:</b></h6>
                        </div>
                        <div className="mt-3">
                            <span className="text-primary"><FaChevronCircleRight /></span>&nbsp;&nbsp;<span className="text-primary">Continue saving when you can</span>
                        </div>
                        <div className="mt-3">
                            <span className="text-danger"><FaChevronCircleDown /></span>&nbsp;&nbsp;<span className="text-danger">Decrease contributors to your IRA for now</span>
                        </div>
                        
                    </div>
                    <div className="col-md-4">
                        <Card className={classes.root} style={{ width: "300px", height: "330px",border:"2px solid whitesmoke" }}>
                            <CardContent>
                                <img src={process.env.PUBLIC_URL + '/assests/image2.jpeg'} alt="Not Found" style={{ width: "250px", height: "150px" }} />
                                <Typography variant="h5" component="h2">
                                    <b>Save for retirement</b>
                                </Typography>
                                <br />
                                <div className="row">
                                    <div className="col-md-9 col-sm-12">
                                        <Typography variant="body2" component="p">
                                            <h6><span className="text-primary"><b>$123k</b></span>&nbsp;<b><span>/</span>&nbsp;$900k</b></h6>
                                            <h6>amount saved of goal</h6>
                                            <h6><b>$3.2k</b></h6>
                                            monthly
                                        </Typography>
                                    </div>
                                    <div className="col-md-3 col-sm-12" style={{marginTop:"35px"}}>
                                        <DonutChart data={dataPie1} />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                        <div className="mt-4">
                            <h6><b>We recommend:</b></h6>
                        </div>
                        <div className="mt-3">
                            <span className="text-success"><FaChevronCircleUp /></span>&nbsp;&nbsp;<span className="text-success">Increase monthly contributors to your  401(k)</span>
                        </div>
                        <br />
                    </div>
                    <div className="col-md-4">
                        <Card className={classes.root} style={{ width: "300px", height: "330px",borderStyle:"dotted",borderColor:"grey" }}>
                            <CardContent style={{
                                textAlign: "center",paddingTop:"80px"
                            }}>
                                <Typography className={classes.pos} color="textSecondary">
                                    <FaPlus style={{ textAlign: "center", width: "100px", height: "100px", color: "grey" }}></FaPlus>
                                    <br />
                                    <br/>
                                    Add a new personal life goal
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>  
        </div>
    );
}