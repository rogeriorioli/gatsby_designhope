import React from 'react'

import {
    FaWordpress,
    FaNodeJs, 
    FaPhp,
    FaReact,
    FaVuejs } from 'react-icons/fa'
import {DiMongodb, DiMysql  } from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'

const icons = [
    {
        id : 1,
        title : 'wordpress',
        icon : <FaWordpress size={100} color="#ccc"/>
    },
    {
        id : 2,
        title : 'Node Js',
        icon : <FaNodeJs size={100} color="#ccc"/>
    },
    {
        id : 3,
        title : 'PHP',
        icon : <FaPhp size={100} color="#ccc"/>
    },
    {
        id : 4,
        title : 'MONGO DB',
        icon : <DiMongodb size={100} color="#ccc"/>
    },
    {
        id : 5,
        title : 'MYSQL',
        icon : <DiMysql size={100} color="#ccc"/>
    },
    {
        id : 6,
        title : 'Javascript',
        icon : <IoLogoJavascript size={100} color="#ccc"/>
    },
    {
        id : 1,
        title : 'React',
        icon : <FaReact size={100} color="#ccc"/>
    }, 
    {
        id : 1,
        title : 'Vue',
        icon : <FaVuejs size={100} color="#ccc"/>
    }
    
]
export default icons