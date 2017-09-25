import content from '../../data/content';
import React,{Component} from 'react';

export function getData(language) {
    return content.filter(obj => obj.lang === language)[0];
}
