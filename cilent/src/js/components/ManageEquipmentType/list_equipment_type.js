
                  import React, { Component } from 'react'
                  import { Link } from 'react-router-dom'
                  import DataTable from "../DataTable";
                  import clsx from 'clsx';
                  import { makeStyles, useTheme } from '@material-ui/core/styles';
                  import Navigation from '../Navigation';

                  const drawerWidth = 240;

                  const useStyles = makeStyles(theme => ({
                    root: {
                      display: 'flex',
                    },
                    appBar: {
                      zIndex: theme.zIndex.drawer + 1,
                      transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                      }),
                    },
                    appBarShift: {
                      marginLeft: drawerWidth,
                      width: `calc(100% - ${drawerWidth}px)`,
                      transition: theme.transitions.create(['width', 'margin'], {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                      }),
                    },
                    menuButton: {
                      marginRight: 36,
                    },
                    hide: {
                      display: 'none',
                    },
                    drawer: {
                      width: drawerWidth,
                      flexShrink: 0,
                      whiteSpace: 'nowrap',
                    },
                    drawerOpen: {
                      width: drawerWidth,
                      transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.enteringScreen,
                      }),
                    },
                    drawerClose: {
                      transition: theme.transitions.create('width', {
                        easing: theme.transitions.easing.sharp,
                        duration: theme.transitions.duration.leavingScreen,
                      }),
                      overflowX: 'hidden',
                      width: theme.spacing(7) + 1,
                      [theme.breakpoints.up('sm')]: {
                        width: theme.spacing(9) + 1,
                      },
                    },
                    toolbar: {
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                      padding: '0 8px',
                      ...theme.mixins.toolbar,
                    },
                    content: {
                      flexGrow: 1,
                      padding: theme.spacing(3),
                    },
                  }));

                  function ManageIncident() {

                    const classes = useStyles();
                  const columns = ['id', 'incident_tital','incident_detail','incident_status','created_at','Action'];


                    return (
                      <div className={classes.root}>
                        <Navigation />
                        <main className={classes.content}>
                          <div className={classes.toolbar} />


                          <DataTable
                               url="/api/incident_table"
                               columns={columns}
                               name={"incident"}
                               headname={" List Incident"}
                               headTablename={"ตารางแสดงข้อมูล"}
                               edit={"แก้ไข"} delete={"ลบ"}
                               deletefail={"ลบข้อมูลไม่สำเร็จ"}
                               deletesuccess={"ลบข้อมูลสำเร็จ"}
                               addlink={"/manage_incident/add_incident"}
                               addbutton={"เพิ่มเหตุการณ์"}
                               delectselect={"ลบข้อมูลที่ถูกเลือก"}
                               />

                        </main>
                      </div>
                    );
                  }

                  export default ManageIncident;
