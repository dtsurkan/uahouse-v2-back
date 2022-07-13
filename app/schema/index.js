// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import HomePage from './single-document/HomePage';

import IntroSlider from './objects/sections/HomePage/IntroSlider';
import Activities from './objects/sections/HomePage/Activities';
import OurMission from './objects/sections/HomePage/OurMission';
import AidRoadmap from './objects/sections/HomePage/AidRoadmap';
import EquipmentSlider from './objects/sections/HomePage/EquipmentSlider';
import Projects from './objects/sections/HomePage/Projects';

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

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    HomePage,
    IntroSlider,
    Activities,
    AidRoadmap,
    OurMission,
    EquipmentSlider,
    DonationMethods,
    Projects,
    IntroSliderCard,
    ActivityCard,
    EquipmentCard,
    ProjectCard,
    AidRoadmapTab,
    Picture,
    Typography,
    BasicLink,
    PortableText,
  ]),
});
