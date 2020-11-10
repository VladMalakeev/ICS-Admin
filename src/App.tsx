import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {SplitRouterComponent} from './commonComponents/hoc/SplitRouterHoc';
import {OneNewsContainer} from "./mainComponents/news/oneNews/OneNewsContainer";
import {NewsListContainer} from "./mainComponents/news/newsList/NewsListContainer";
import {Header} from "./commonComponents/header/HeaderContainer";
import {Body, Content, Information} from "./commonComponents/content/contentStyles";
import {SiteBar} from "./commonComponents/content/sitebar/SiteBarContainer";
import {Footer} from "./commonComponents/footer/FooterContainer";
import NotFound from "./commonComponents/NotFountComponent";
import {DepartmentsListContainer} from "./mainComponents/infornationalComponents/department/departmentsList/DepartmentsListContainer";
import {CoursesContainer} from "./mainComponents/persistentData/courses/CoursesContainer";
import {DegreesContainer} from "./mainComponents/persistentData/degrees/DegreesContainer";
import {SemestersContainer} from "./mainComponents/persistentData/semesters/SemestersContainer";
import {OneDepartmentContainer} from "./mainComponents/infornationalComponents/department/oneDepartment/OneDepartmentContainer";
import {GroupsListContainer} from "./mainComponents/infornationalComponents/group/groupsList/GroupListContainer";
import {OneSpecialtyContainer} from "./mainComponents/infornationalComponents/specialty/oneSpecialty/OneSpecialtyContainer";
import {SpecialtyListContainer} from "./mainComponents/infornationalComponents/specialty/specialtiesList/SpecialtyListContainer";
import {SpecializationListContainer} from "./mainComponents/infornationalComponents/specialization/specializationsList/SpecializationListContainer";
import {OneSpecializationContainer} from "./mainComponents/infornationalComponents/specialization/oneSpecialization/OneSpecializationContainer";
import {LecturersListContainer} from "./mainComponents/infornationalComponents/lecturer/lecturersList/LecturersListContainer";
import {OneLecturerContainer} from "./mainComponents/infornationalComponents/lecturer/oneLecturer/OneLecturerContainer";

function App() {
  return (
    <BrowserRouter>
        <Header/>
        <Body>
            <SiteBar/>
            <Content>
                <Information>
                    <Switch>
                        {/* news */}
                        <Route path='/news/:id?' render={(props)=> <SplitRouterComponent {...props} list={NewsListContainer} one={OneNewsContainer}/>}/>
                        
                        {/* informational components */}
                        <Route path='/specialties/:id?' render={(props)=> <SplitRouterComponent {...props} list={SpecialtyListContainer} one={OneSpecialtyContainer}/>} />
                        <Route path='/specializations/:id?' render={(props)=> <SplitRouterComponent {...props} list={SpecializationListContainer} one={OneSpecializationContainer}/>} />
                        <Route path='/departments/:id?' render={(props)=> <SplitRouterComponent {...props} list={DepartmentsListContainer} one={OneDepartmentContainer}/>} />
                        <Route path='/lecturers/:id?' render={(props)=> <SplitRouterComponent {...props} list={LecturersListContainer} one={OneLecturerContainer}/>} />
                        <Route exact path='/groups' component={GroupsListContainer} /> 
                        
                        {/* persistent data */}
                        <Route exact path='/academic-degrees' component={DegreesContainer} />
                        <Route exact path='/semesters' component={SemestersContainer} />
                        <Route exact path='/courses' component={CoursesContainer} />
                        <Route component={NotFound}/>
                    </Switch>
                </Information>
                <Footer/>
            </Content>
        </Body>
    </BrowserRouter>
  );
}

export default App;
