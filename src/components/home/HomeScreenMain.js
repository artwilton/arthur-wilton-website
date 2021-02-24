import { HomeSectionAbout, HomeSecitonFeatured, HomeSectionMain, HomeSectionWork } from './'

function HomeScreenMain(props) {
    return (
        <>
            <HomeSectionMain/>
            <HomeSectionWork/>
            <HomeSecitonFeatured/>
            <HomeSectionAbout/>
        </>
    );
}

export default HomeScreenMain;