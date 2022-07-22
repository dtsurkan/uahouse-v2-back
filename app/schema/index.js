// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import HomePage from './single-document/HomePage';
import AboutPage from './single-document/AboutPage';
import Project from './documents/Project';

import IntroSlider from './objects/sections/HomePage/IntroSlider';
import MainHero from './objects/sections/MainHero';
import Activities from './objects/sections/HomePage/Activities';
import OurMission from './objects/sections/HomePage/OurMission';
import OurGoals from './objects/sections/OurGoals';
import AidRoadmap from './objects/sections/HomePage/AidRoadmap';
import EquipmentSlider from './objects/sections/HomePage/EquipmentSlider';
import Projects from './objects/sections/HomePage/Projects';
import Statistics from './objects/sections/HomePage/Statistics';
import Banner from './objects/sections/Banner';

import BasicLink from './objects/shared/BasicLink';
import Picture from './objects/shared/Picture';
import Typography from './objects/shared/Typography';
import IntroSliderCard from './objects/shared/cards/IntroSliderCard';
import ActivityCard from './objects/shared/cards/ActivityCard';
import PortableText from './objects/shared/PortableText';
import DonationMethods from './objects/sections/HomePage/DonationMethods';
import AidRoadmapTab from './objects/shared/tabs/AidRoadmapTab';
import EquipmentCard from './objects/shared/cards/EquipmentCard';
import ProjectCard from './objects/shared/cards/ProjectCard';
import StatisticPoint from './objects/shared/StatisticPoint';

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
    MainHero,
    IntroSlider,
    Activities,
    AidRoadmap,
    OurMission,
    OurGoals,
    EquipmentSlider,
    DonationMethods,
    Banner,
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
  ]),
});
