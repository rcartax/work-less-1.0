import { getDates1 } from './dateForm1.js';
import { getDates2 } from './dateForm2.js';
import { getDates3 } from './dateForm3.js';

const form1 = document.getElementById('dateForm1')
        form1.addEventListener('submit', getDates1);

const form2 = document.getElementById('dateForm2')
    form2.addEventListener('submit', getDates2);

const form3 = document.getElementById('dateForm3')
    form3.addEventListener('submit', getDates3);