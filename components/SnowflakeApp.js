// @flow

import TrackSelector from '../components/TrackSelector'
import NightingaleChart from '../components/NightingaleChart'
import KeyboardListener from '../components/KeyboardListener'
import Track from '../components/Track'
import Wordmark from '../components/Wordmark'
import LevelThermometer from '../components/LevelThermometer'
import { eligibleTitles, trackIds, milestones, milestoneToPoints } from '../constants'
import PointSummaries from '../components/PointSummaries'
import type { Milestone, MilestoneMap, TrackId } from '../constants'
import React from 'react'
import TitleSelector from '../components/TitleSelector'
import NavBar from '../components/NavBar'
const LoadingIcon = require('react-loading-animation');

type SnowflakeAppState = {
  milestoneByTrack: MilestoneMap,
  name: string,
  title: string,
  focusedTrackId: TrackId,
  location:string,
  team:string,
  id:string,
}

const hashToState = (hash: String): ?SnowflakeAppState => {
  if (!hash) return null
  const result = emptyState()
  const hashValues = hash.split('#')[1].split(',')
  if (!hashValues) return null
  trackIds.forEach((trackId, i) => {
    result.milestoneByTrack[trackId] = coerceMilestone(Number(hashValues[i]))
  })
  if (hashValues[27]) result.name = decodeURI(hashValues[27])
  if (hashValues[28]) result.title = decodeURI(hashValues[28])
  if (hashValues[29]) result.location = decodeURI(hashValues[29])
  if (hashValues[30]) result.team = decodeURI(hashValues[30])
  if (hashValues[31]) result.id = decodeURI(hashValues[31])
  return result
}

const coerceMilestone = (value: number): Milestone => {
  // HACK I know this is goofy but i'm dealing with flow typing
  switch(value) {
    case 0: return 0
    case 1: return 1
    case 2: return 2
    case 3: return 3
    case 4: return 4
    case 5: return 5
    default: return 0
  }
}

const emptyState = (): SnowflakeAppState => {
  return {
    name: '',
    title: '',
    id:'',
    location:'',
    team:'',
    milestoneByTrack: {
      'BOOKING':0,
      'BOOKING_CORE':0,
      'SHIPMENT':0,
      'PRODUCT_AND_ROUTING':0, 
      'PRICING':0,
      'HAULAGE':0,
      'CUSTOMER':0,
      'ACTIVITY_PLAN':0,
      'ALLOCATION':0,
      'TPDOC':0,
      'FRAMEWORK':0,
      'FUI':0,
      'CARGO':0,
      'SPECIAL_CARGO':0,
      'INTERFACES':0,
      'DOC_PROCESS_ENG':0,
      'DOCBROKER':0,
      'ARCHIVING':0,
      'TOP':0,
      'GHDER':0,
      'DECOMMISSIONED':0,
      'REF_DAT_MGMT':0,
      'UI_FMWK':0,
      'SAT':0,
      'DEVELOPMENT':0,
      'ENVIRONMENT':0,
      'GENERAL_KNW':0
    },
    focusedTrackId: 'BOOKING'
  }
}


const stateToHash = (state: SnowflakeAppState) => {
  if (!state || !state.milestoneByTrack) return null
  const values = trackIds.map(trackId => state.milestoneByTrack[trackId]).concat(encodeURI(state.name), encodeURI(state.title), encodeURI(state.location),encodeURI(state.team),encodeURI(state.id))
  return values.join(',')
}

var isLoading = true;

type Props = {}

class SnowflakeApp extends React.Component<Props, SnowflakeAppState> {

  
  constructor(props: Props) {
    super(props)
    this.state = emptyState()
  }

  componentDidUpdate() {
    const hash = stateToHash(this.state)
    if (hash) window.location.replace(`#${hash}`)
  }

  componentDidMount() {
    const state = hashToState(window.location.hash)
    console.log("-------------------------------------------")
    if (state) {
      this.setState(state)
      
    } else {
      this.setState(emptyState())
    }
    isLoading=false;
  }

  render() {
    
    if (isLoading) {
      return <LoadingIcon />;
    }
    
    return (
      <main>
        <style jsx global>{`
          body {
            font-family: Helvetica;
            background-color:white;
          }
          main {
            width: 1150px;
            margin: 0 auto;
          }
          .name-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 30px;
            line-height: 40px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 10px;
          }
          .other-input {
            border: none;
            display: block;
            border-bottom: 2px solid #fff;
            font-size: 15px;
            line-height: 20px;
            font-weight: bold;
            width: 380px;
            margin-bottom: 2px;
          }
          .name-input:hover, .name-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          .other-input:hover, .other-input:focus {
            border-bottom: 2px solid #ccc;
            outline: 0;
          }
          a {
            color: #888;
            text-decoration: none;
          }
          .btn{
          background-color:#9dc0f9;
         display:inline-block;
         padding:0.35em 1.2em;
         border:0.15em solid #FFFFFF;
         margin:0 0.3em 0.3em 0;
         border-radius:0.12em;
         box-sizing: border-box;
         text-decoration:none;
         font-family:'Roboto',sans-serif;
         font-weight:300;
         color:#FFFFFF;
         text-align:center;
         transition: all 0.2s;
        }
        .btn:hover{
         background-color:#6099f7;
        }
        `}</style>
        <NavBar />
        
        <div style={{display: 'flex'}}>
          
          <div style={{flex: 1}}>
          <title>View All</title>
            <form method="POST" action="/save">
              <input
                  type="hidden"
                  value={stateToHash(this.state)}
                  name="theUrl"
              />
              <input
                  type="text"
                  className="name-input"
                  value={this.state.name}
                  onChange={e => this.setState({name: e.target.value})}
                  placeholder="Name"
                  pattern="[A-Za-z]+"
                  title="Can only contain characters."
                  required
                  />
              <input 
                  type="text"
                  className="other-input"
                  value={this.state.id}
                  onChange={e => this.setState({id:e.target.value})}
                  placeholder="Maersk ID"
                  required
                  />
              <input 
                  type="text"
                  className="other-input"
                  value={this.state.location}
                  onChange={e => this.setState({location:e.target.value})}
                  placeholder="Location"
                  pattern="[A-Za-z]+"
                  title="Can only contain characters."
                  required
                  />
              <input 
                  type="text"
                  className="other-input"
                  value={this.state.team}
                  onChange={e => this.setState({team:e.target.value})}
                  placeholder="Team"
                  pattern="[A-Za-z]+"
                  title="Can only contain characters."
                  required
                  />
              <TitleSelector
                  milestoneByTrack={this.state.milestoneByTrack}
                  currentTitle={this.state.title}
                  setTitleFn={(title) => this.setTitle(title)} 
                  />
              <br />
              <input type="submit" value="Save" className="btn"/>
            </form>
            <PointSummaries milestoneByTrack={this.state.milestoneByTrack} />
            <LevelThermometer milestoneByTrack={this.state.milestoneByTrack} />
          </div>
          <div style={{flex: 0}}>
            <NightingaleChart
                milestoneByTrack={this.state.milestoneByTrack}
                focusedTrackId={this.state.focusedTrackId}
                handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />
          </div>
        </div>
        <TrackSelector
            milestoneByTrack={this.state.milestoneByTrack}
            focusedTrackId={this.state.focusedTrackId}
            setFocusedTrackIdFn={this.setFocusedTrackId.bind(this)} />
        <KeyboardListener
            selectNextTrackFn={this.shiftFocusedTrack.bind(this, 1)}
            selectPrevTrackFn={this.shiftFocusedTrack.bind(this, -1)}
            increaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, 1)}
            decreaseFocusedMilestoneFn={this.shiftFocusedTrackMilestoneByDelta.bind(this, -1)} />
        <Track
            milestoneByTrack={this.state.milestoneByTrack}
            trackId={this.state.focusedTrackId}
            handleTrackMilestoneChangeFn={(track, milestone) => this.handleTrackMilestoneChange(track, milestone)} />

      </main>
    )
  }

  handleTrackMilestoneChange(trackId: TrackId, milestone: Milestone) {
    const milestoneByTrack = this.state.milestoneByTrack
    milestoneByTrack[trackId] = milestone

    const titles = eligibleTitles(milestoneByTrack)
    const title = titles.indexOf(this.state.title) === -1 ? titles[0] : this.state.title

    this.setState({ milestoneByTrack, focusedTrackId: trackId, title })
  }

  shiftFocusedTrack(delta: number) {
    let index = trackIds.indexOf(this.state.focusedTrackId)
    index = (index + delta + trackIds.length) % trackIds.length
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  setFocusedTrackId(trackId: TrackId) {
    let index = trackIds.indexOf(trackId)
    const focusedTrackId = trackIds[index]
    this.setState({ focusedTrackId })
  }

  shiftFocusedTrackMilestoneByDelta(delta: number) {
    let prevMilestone = this.state.milestoneByTrack[this.state.focusedTrackId]
    let milestone = prevMilestone + delta
    if (milestone < 0) milestone = 0
    if (milestone > 5) milestone = 5
    this.handleTrackMilestoneChange(this.state.focusedTrackId, milestone)
  }

  setTitle(title: string) {
    let titles = eligibleTitles(this.state.milestoneByTrack)
    title = titles.indexOf(title) == -1 ? titles[0] : title
    this.setState({ title })
  }

}

export default SnowflakeApp
