import './VanMap.css'; 
import EmptyCarriage from './img/EmptyCarriage.png';
import EmptyCarriageFourth from './img/EmptyCarriageFourth.png'; 


export function VanMap ({ classType = 'second', vagNum}) {
    let map;

    if (vagNum < 10) {
        vagNum = '0' + vagNum;
    }

        if ( classType == 'first' ) {
        map = (
        <div className="choosing-place-box__item__map" style={{backgroundImage: `url(${EmptyCarriage})`}}>
            <div className="choosing-place-box__item__map__part-1">
                <div className="choosing-place-box__item__map__part-1__v-num">{vagNum}</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">1</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">2</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">3</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">4</div>
            </div>
            <div className="choosing-place-box__item__map__part-3 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">5</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">6</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">7</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">8</div>
                </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">9</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">10</div>
            </div>
            <div className="choosing-place-box__item__map__part-4 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">11</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">12</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">13</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">14</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">15</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod">16</div>
            </div>
        </div>
        )
    }

    if ( classType == 'second' ) {
        map = (
        <div className="choosing-place-box__item__map" style={{backgroundImage: `url(${EmptyCarriage})`}}>
            <div className="choosing-place-box__item__map__part-1">
                 <div className="choosing-place-box__item__map__part-1__v-num">{vagNum}</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">2</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">4</div>
                <div className="choosing-place-box__item__map__part__sit">1</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">3</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">6</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">8</div>
                <div className="choosing-place-box__item__map__part__sit">5</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">7</div>
            </div>
            <div className="choosing-place-box__item__map__part-3 map-parts">
                <div className="choosing-place-box__item__map__part__sit">10</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">12</div>
                <div className="choosing-place-box__item__map__part__sit">9</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">11</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">14</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">16</div>
                <div className="choosing-place-box__item__map__part__sit">13</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">15</div>
                </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">18</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">20</div>
                <div className="choosing-place-box__item__map__part__sit">17</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">19</div>
            </div>
            <div className="choosing-place-box__item__map__part-4 map-parts">
                <div className="choosing-place-box__item__map__part__sit">22</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">24</div>
                <div className="choosing-place-box__item__map__part__sit">21</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">23</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">26</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">28</div>
                <div className="choosing-place-box__item__map__part__sit">25</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">27</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">30</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">32</div>
                <div className="choosing-place-box__item__map__part__sit">29</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">31</div>
            </div>
        </div>
        )
    }

    if ( classType == 'third' ) {
        map = (
        <div className="choosing-place-box__item__map" style={{backgroundImage: `url(${EmptyCarriage})`}}>
            <div className="choosing-place-box__item__map__part-1">
                <div className="choosing-place-box__item__map__part-1__v-num">{vagNum}</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">2</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">4</div>
                <div className="choosing-place-box__item__map__part__sit">1</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">3</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">33</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">34</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">6</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">8</div>
                <div className="choosing-place-box__item__map__part__sit">5</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">7</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">35</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">36</div>
            </div>
            <div className="choosing-place-box__item__map__part-3 map-parts">
                <div className="choosing-place-box__item__map__part__sit">10</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">12</div>
                <div className="choosing-place-box__item__map__part__sit">9</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">11</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">37</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">38</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">14</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">16</div>
                <div className="choosing-place-box__item__map__part__sit">13</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">15</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">39</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">40</div>
                </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">18</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">20</div>
                <div className="choosing-place-box__item__map__part__sit">17</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">19</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">41</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">42</div>
            </div>
            <div className="choosing-place-box__item__map__part-4 map-parts">
                <div className="choosing-place-box__item__map__part__sit">22</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">24</div>
                <div className="choosing-place-box__item__map__part__sit">21</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">23</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">43</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">44</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">26</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">28</div>
                <div className="choosing-place-box__item__map__part__sit">25</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">27</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">45</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">46</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit">30</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">32</div>
                <div className="choosing-place-box__item__map__part__sit">29</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit">31</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">47</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod">48</div>
            </div>
        </div>
        )
    }

    if ( classType == 'fourth' ) {
        map = (
        <div className="choosing-place-box__item__map" style={{backgroundImage: `url(${EmptyCarriageFourth})`}}>
            <div className="choosing-place-box__item__map__part-1">
                <div className="choosing-place-box__item__map__part-1__v-num">{vagNum}</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">2</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">4</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">1</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">3</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-end"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">34</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">33</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">35</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">6</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">8</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">5</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">7</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">36</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">38</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">37</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">39</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">10</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">12</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">9</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">11</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">40</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">42</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">41</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">43</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">14</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">16</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">13</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">15</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">44</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">46</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">45</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">47</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">18</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">20</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">17</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">19</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">48</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">50</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">49</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">51</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">22</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">24</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">21</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">23</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">52</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">54</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">53</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">55</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">26</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">28</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">25</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">27</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">56</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">58</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">57</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">59</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">30</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">32</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">29</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">31</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">60</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-end"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">61</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod">62</div>
            </div>
        </div>
        )
    }

    return map;
}