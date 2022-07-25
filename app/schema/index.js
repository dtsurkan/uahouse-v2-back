// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import HomePage from './single-document/HomePage';
import AboutPage from './single-document/AboutPage';
import ProjectPage from './single-document/ProjectPage';
import Project from './documents/Project';

import IntroSlider from './objects/sections/IntroSlider';
import MainHero from './objects/sections/MainHero';
import Activities from './objects/sections/Activities';
import OurMission from './objects/sections/OurMission';
import OurGoals from './objects/sections/OurGoals';
import AidRoadmap from './objects/sections/AidRoadmap';
import EquipmentSlider from './objects/sections/EquipmentSlider';
import Projects from './objects/sections/Projects';
import Statistics from './objects/sections/Statistics';
import Banner from './objects/sections/Banner';
import DonationMethods from './objects/sections/DonationMethods';

import BasicLink from './objects/shared/BasicLink';
import Picture from './objects/shared/Picture';
import Typography from './objects/shared/Typography';
import IntroSliderCard from './objects/shared/cards/IntroSliderCard';
import ActivityCard from './objects/shared/cards/ActivityCard';
import PortableText from './objects/shared/PortableText';
import AidRoadmapTab from './objects/shared/tabs/AidRoadmapTab';
import EquipmentCard from './objects/shared/cards/EquipmentCard';
import ProjectCard from './objects/shared/cards/ProjectCard';
import StatisticPoint from './objects/shared/StatisticPoint';
import MemberCard from './objects/shared/cards/MemberCard';
import MemberBoard from './objects/shared/MemberBoard';
import Members from './objects/sections/Members';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    Project,
    HomePage,
    AboutPage,
    ProjectPage,
    MainHero,
    Members,
    IntroSlider,
    Activities,
    AidRoadmap,
    OurMission,
    OurGoals,
    EquipmentSlider,
    DonationMethods,
    Banner,
    MemberBoard,
    Projects,
    Statistics,
    IntroSliderCard,
    ActivityCard,
    EquipmentCard,
    ProjectCard,
    StatisticPoint,
    AidRoadmapTab,
    Picture,
    Typography,
    BasicLink,
    PortableText,
    MemberCard,
  ]),
});
