import React from "react";
import {
    StarOutlined
} from "@ant-design/icons/lib"; 

export default {
    blocks:[
        {
            elements:[
                {
                    title:"Новости",
                    link:"/news",
                    ico:<StarOutlined/>
                }
            ]
        },
        {
            elements:[
                {
                    title:"Специальности",
                    link:"/specialties",
                    ico:<StarOutlined/>
                },
                {
                    title:"Специализации",
                    link:"/specializations",
                    ico:<StarOutlined/>
                },
                {
                    title:"Кафедры",
                    link:"/departments",
                    ico:<StarOutlined/>
                },
                {
                    title:"Преподаватели",
                    link:"/lecturers",
                    ico:<StarOutlined/>
                },
                {
                    title:"Группы",
                    link:"/groups",
                    ico:<StarOutlined/>
                }
                
            ]
        },
        {
            elements:[
                {
                    title:"Степени",
                    link:"/academic-degrees",
                    ico:<StarOutlined/>
                },
                {
                    title:"Семестры",
                    link:"/semesters",
                    ico:<StarOutlined/>
                },
                {
                    title:"Курсы",
                    link:"/courses",
                    ico:<StarOutlined/>
                    
                }
            ]
        }
    ]
} 