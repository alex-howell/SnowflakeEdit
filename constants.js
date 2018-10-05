// @flow
import * as d3 from 'd3'

export type TrackId = 'BOOKING' | 'BOOKING_CORE' | 'SHIPMENT' | 'PRODUCT_AND_ROUTING' | 'PRICING' | 'HAULAGE' | 'CUSTOMER' | 'ACTIVITY_PLAN' | 'ALLOCATION' | 'TPDOC' | 'FRAMEWORK' | 'FUI' |
  'CARGO' | 'SPECIAL_CARGO' | 'INTERFACES' | 'DOC_PROCESS_ENG' | 'DOCBROKER' | 'ARCHIVING' | 'TOP' | 'GHDER' | 'DECOMMISSIONED' | 'REF_DAT_MGMT'
  | 'UI_FMWK' | 'SAT' | 'DEVELOPMENT' | 'ENVIRONMENT' | 'GENERAL_KNW'
export type Milestone = 0 | 1 | 2 | 3 | 4 | 5

export type MilestoneMap = {
  'BOOKING': Milestone,
  'BOOKING_CORE': Milestone,
  'SHIPMENT': Milestone,
  'PRODUCT_AND_ROUTING': Milestone,
  'PRICING': Milestone,
  'HAULAGE': Milestone,
  'CUSTOMER': Milestone,
  'ACTIVITY_PLAN': Milestone,
  'ALLOCATION': Milestone,
  'TPDOC': Milestone,
  'FRAMEWORK': Milestone,
  'FUI': Milestone,
  'CARGO': Milestone,
  'SPECIAL_CARGO': Milestone,
  'INTERFACES': Milestone,
  'DOC_PROCESS_ENG': Milestone,
  'DOCBROKER': Milestone,
  'ARCHIVING': Milestone,
  'TOP': Milestone,
  'GHDER': Milestone,
  'DECOMMISSIONED': Milestone,
  'REF_DAT_MGMT': Milestone,
  'UI_FMWK': Milestone,
  'SAT': Milestone,
  'DEVELOPMENT': Milestone,
  'ENVIRONMENT': Milestone,
  'GENERAL_KNW': Milestone
}
export const milestones = [0, 1, 2, 3, 4, 5]

export const milestoneToPoints = (milestone: Milestone): number => {
  switch (milestone) {
    case 0: return 0
    case 1: return 1
    case 2: return 3
    case 3: return 6
    case 4: return 12
    case 5: return 20
    default: return 0
  }
}

export const pointsToLevels = {
  '0': '1.1',
  '8': '1.2',
  '18': '1.3',
  '28': '2.1',
  '38': '2.2',
  '48': '2.3',
  '58': '3.1',
  '69': '3.2',
  '80': '3.3',
  '93': '4.1',
  '105': '4.2',
  '118': '4.3',
  '127': '5.1',
  '155': '5.2',
  '189': '5.3',
}

export const maxLevel = 189

export type Track = {
  displayName: string,
  category: string, // TK categoryId type?
  description: string,
  milestones: {
    summary: string,
    signals: string[],
    examples: string[]
  }[]
}

type Tracks = {|
  'BOOKING': Track,
  'BOOKING_CORE': Track,
  'SHIPMENT': Track,
  'PRODUCT_AND_ROUTING': Track,
  'PRICING': Track,
  'HAULAGE': Track,
  'CUSTOMER': Track,
  'ACTIVITY_PLAN': Track,
  'ALLOCATION': Track,
  'TPDOC': Track,
  'FRAMEWORK': Track,
  'FUI': Track,
  'CARGO': Track,
  'SPECIAL_CARGO': Track,
  'INTERFACES': Track,
  'DOC_PROCESS_ENG': Track,
  'DOCBROKER': Track,
  'ARCHIVING': Track,
  'TOP': Track,
  'GHDER': Track,
  'DECOMMISSIONED': Track,
  'REF_DAT_MGMT': Track,
  'UI_FMWK': Track,
  'SAT': Track,
  'DEVELOPMENT': Track,
  'ENVIRONMENT': Track,
  'GENERAL_KNW' : Track
  |}

export const tracks: Tracks = {
  "BOOKING": {
    "displayName": "Booking",
    "category": "A",
    "description": "",
    "milestones": [{
      "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.",
      "signals": [
        "Fixed",
      ]
    }, {
      "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.",
      "signals": [
        "",
      ]
    }, {
      "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.",
      "signals": [
        "",
      ]
    }, {
      "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.",
      "signals": [
        "",
      ]
    }, {
      "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.",
      "signals": [
        "",
      ]
    }]
  },

  "BOOKING_CORE": {
    "displayName": "Booking Core",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "SHIPMENT": {
    "displayName": "Shipment",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "PRODUCT_AND_ROUTING": {
    "displayName": "Product & Routing",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },

  "PRICING": {
    "displayName": "Pricing",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "HAULAGE": {
    "displayName": "Haulage",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "CUSTOMER": {
    "displayName": "Customer",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "ACTIVITY_PLAN": {
    "displayName": "Activity Plan",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "ALLOCATION": {
    "displayName": "Allocation",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "TPDOC": {
    "displayName": "TPDoc Management",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "FRAMEWORK": {
    "displayName": "Framework",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "FUI": {
    "displayName": "FUI",
    "category": "A",
    "description": "Full Update Interface. Allows external systems to update data on shipment and transport documents.",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "CARGO": {
    "displayName": "Cargo",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "SPECIAL_CARGO": {
    "displayName": "Special Cargo",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "INTERFACES": {
    "displayName": "Interfaces",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "DOC_PROCESS_ENG": {
    "displayName": "Document Processing Engine",
    "category": "A",
    "description": "All documents going out of GCSS are controlled by the DPE.",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "DOCBROKER": {
    "displayName": "DocBroker",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "ARCHIVING": {
    "displayName": "Archiving",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "TOP": {
    "displayName": "ToP",
    "category": "A",
    "description": "Terms of Payment receives Transport Documents from SAP and applies terms of payments to shipments",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "GHDER": {
    "displayName": "GHDER",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "DECOMMISSIONED": {
    "displayName": "Decommissioned",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "REF_DAT_MGMT": {
    "displayName": "Refernce Data Management",
    "category": "A",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "UI_FMWK": {
    "displayName": "UI Framework",
    "category": "B",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "SAT": {
    "displayName": "SAT",
    "category": "B",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "DEVELOPMENT": {
    "displayName": "Dev Support Features",
    "category": "C",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "ENVIRONMENT": {
    "displayName": "Environment",
    "category": "C",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
  "GENERAL_KNW": {
    "displayName": "General Knowledge",
    "category": "C",
    "description": "",
    "milestones": [{ "summary": "Conceptual - You have seen, heard of or been introduced to this area but does not have practical experience in changes yet.", "signals": ["",], "examples": ["",], }, { "summary": "Light Experience - You have made a few changes, in this area, but will need some assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Medium Experience - You have good solid knowledge in this area and can do changes, might need minor assistance.", "signals": ["",], "examples": ["",], }, { "summary": "Experienced - You have worked in this area several times and will only need assistance for very complex issues. You can guide others.", "signals": ["",], "examples": ["",], }, { "summary": " Master - You are among the most knowledgeable in this area and can perform without any assistance. You can teach others in complex issues.", "signals": ["",], "examples": ["",], }]
  },
}

export const trackIds: TrackId[] = Object.keys(tracks)

export const categoryIds: Set<string> = trackIds.reduce((set, trackId) => {
  set.add(tracks[trackId].category)
  return set
}, new Set())

export const categoryPointsFromMilestoneMap = (milestoneMap: MilestoneMap) => {
  let pointsByCategory = new Map()
  trackIds.forEach((trackId) => {
    const milestone = milestoneMap[trackId]
    const categoryId = tracks[trackId].category
    let currentPoints = pointsByCategory.get(categoryId) || 0
    pointsByCategory.set(categoryId, currentPoints + milestoneToPoints(milestone))
  })
  return Array.from(categoryIds.values()).map(categoryId => {
    const points = pointsByCategory.get(categoryId)
    return { categoryId, points: pointsByCategory.get(categoryId) || 0 }
  })
}

export const totalPointsFromMilestoneMap = (milestoneMap: MilestoneMap): number =>
  trackIds.map(trackId => milestoneToPoints(milestoneMap[trackId]))
    .reduce((sum, addend) => (sum + addend), 0)

export const categoryColorScale = d3.scaleOrdinal()
  .domain(categoryIds)
  .range(['#00abc2', '#428af6', '#e1439f', '#e54552'])

export const titles = [
  { label: 'Engineer I', minPoints: 0, maxPoints: 20 },
  { label: 'Engineer II', minPoints: 21, maxPoints: 35 },
  { label: 'Senior Engineer', minPoints: 36, maxPoints: 57 },
  { label: 'Group Lead', minPoints: 36, maxPoints: 57 },
  { label: 'Staff Engineer', minPoints: 58, maxPoints: 89 },
  { label: 'Senior Group Lead', minPoints: 58, maxPoints: 89 },
  { label: 'Principal Engineer', minPoints: 90 },
  { label: 'Director of Engineering', minPoints: 90 }
]

export const eligibleTitles = (milestoneMap: MilestoneMap): string[] => {
  const totalPoints = totalPointsFromMilestoneMap(milestoneMap)

  return titles.filter(title => (title.minPoints === undefined || totalPoints >= title.minPoints)
    && (title.maxPoints === undefined || totalPoints <= title.maxPoints))
    .map(title => title.label)
}