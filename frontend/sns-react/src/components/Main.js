import React, { useContext } from 'react';
import {ApiContext} from '../context/ApiContext';
import Grid from '@material-ui/core/Grid';
import { GoMail } from 'react-icons/go'
import { BsFillPeopleFill } from 'react-icons/bs'
import Profile from './Profile';

const Main = () => {

  const { profiles, profile, askList, askListFull, inbox } = useContext(
    ApiContext
  );
  const filterProfiles = profiles.filter((prof) => {
    return prof.id !== profile.id;
  });
  const listProfiles =
    filterProfiles &&
    filterProfiles.map((filprof) => (
      <Profile
        key={filprof.id}
        profileData={filprof}
        askData={askListFull.filter((ask) => {
          return (
            (filprof.userPro === ask.askFrom) | (filprof.userPro === ask.askTo)
          );
        })}
      />
    ));
    console.log(profiles);
  return ( 
    <Grid container>
      <Grid item xs={4}>
        <div className="app-profiles">
            {listProfiles}
        </div>
      </Grid>
      <Grid item xs={4}>
        <div className="app-details">
        </div>
        <h3 className="title-ask">
          {" "}
          <BsFillPeopleFill className="badge" />
          Approval request list
        </h3>
        <div className="app-details">
          <div className="task-list">
          </div>
        </div>
      </Grid>

      <Grid item xs={4}>
        <h3>
          <GoMail className="badge" />
          DM Inbox
        </h3>
        <div className="app-dms">
          <div className="task-list">
          </div>
        </div>
      </Grid>
    </Grid>
  )
}

export default Main
