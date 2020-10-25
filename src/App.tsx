import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import { SplitRouterComponent } from './commonComponents/hoc/SplitRouterHoc';
import {OneNewsContainer} from "./mainComponents/news/OneNews/OneNewsContainer";
import {NewsListContainer} from "./mainComponents/news/NewsList/NewsListContainer";
import {Header} from "./commonComponents/header/HeaderContainer";
import {Body, Content, Information, TestDiv} from "./commonComponents/content/contentStyles";
import {SiteBar} from "./commonComponents/content/sitebar/SiteBarContainer";
import {Footer} from "./commonComponents/footer/FooterContainer";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Body>
            <SiteBar/>
            <Content>
                <Information>
                  <TestDiv/>
                  <TestDiv/>
                  <TestDiv/>
                  <TestDiv/>
                  <TestDiv/>
                    <Switch>
                        {/* news */}
                        <Route path='/news/:id?'>
                          {/* <SplitRouterComponent list={NewsListContainer} one={OneNewsContainer}/> */}
                        </Route>
                        {/* informational components */}
                        {/* <Route exact path='/specialties/:id?' component={SpecialtiesComponent} />
                        <Route exact path='/specializations:id?' component={SpecializationsComponent} />
                        <Route exact path='/departments:id?' component={DepartmentsComponent} />
                        <Route exact path='/lecturers:id?' component={LecturersComponent} />
                        <Route exact path='/groups' component={GroupsComponent} /> */}
                        {/* persistent data */}
                        {/* <Route exact path='/academic-degrees' component={AcademicDegreesComponent} />
                        <Route exact path='/semesters' component={SemestersComponent} />
                        <Route exact path='/courses' component={CoursesComponent} /> */}
                        {/* <Route component={NotFound}/> */}
                    </Switch>
                </Information>
                <Footer/>
            </Content>
        </Body>
    </BrowserRouter>
  );
}

export default App;
