import './VanMap.css'; 
import EmptyCarriage from './img/EmptyCarriage.png';
import EmptyCarriageFourth from './img/EmptyCarriageFourth.png'; 


export function VanMap ({ classType = 'second', vagNum, places, addNewPlace, way}) {
    let map;

    if (vagNum < 10) {
        vagNum = '0' + vagNum;
    }

    function addPlace (e) {
        if (e.style.backgroundColor == 'rgb(196, 196, 196)') {
            alert ('Извините, но это место уже занято! Пожалуйста, выберите другое.')
            return
        } else {
            addNewPlace(e.textContent, way);
            /* e.style.border = '1px solid #FFA800'; */
        }
    }

        if ( classType == 'first' ) {
        map = (
        <div className="choosing-place-box__item__map" style={{backgroundImage: `url(${EmptyCarriage})`}}>
            <div className="choosing-place-box__item__map__part-1">
                <div className="choosing-place-box__item__map__part-1__v-num">{vagNum}</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[0]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[0]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>1</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[1]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[1]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>2</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[2]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[2]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>3</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[3]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[3]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>4</div>
            </div>
            <div className="choosing-place-box__item__map__part-3 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[4]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[4]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>5</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[5]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[5]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>6</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[6]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[6]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>7</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[7]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[7]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>8</div>
                </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[8]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[8]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>9</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[9]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[9]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>10</div>
            </div>
            <div className="choosing-place-box__item__map__part-4 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[10]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[10]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>11</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[11]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[11]?.available ? '#000000' : '#ffffff'}}>12</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[12]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[12]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>13</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[13]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[13]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>14</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[14]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[14]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>15</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit first-cl-mod" style={{backgroundColor: places?.[16]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[15]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>16</div>
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
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[1]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[1]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>2</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[3]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[3]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>4</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[0]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[0]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>1</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[2]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[2]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>3</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[5]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[5]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>6</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[7]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[7]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>8</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[4]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[4]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>5</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[6]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[6]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>7</div>
            </div>
            <div className="choosing-place-box__item__map__part-3 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[9]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[9]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>10</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[11]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[11]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>12</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[8]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[8]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>9</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[10]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[10]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>11</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[13]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[13]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>14</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[15]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[15]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>16</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[12]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[12]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>13</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[14]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[14]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>15</div>
                </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[17]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[17]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>18</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[19]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[19]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>20</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[16]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[16]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>17</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[18]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[18]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>19</div>
            </div>
            <div className="choosing-place-box__item__map__part-4 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[21]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[21]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>22</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[23]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[23]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>24</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[20]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[20]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>21</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[22]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[22]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>23</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[25]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[25]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>26</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[27]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[27]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>28</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[24]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[24]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>25</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[26]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[26]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>27</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[29]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[29]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>30</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[31]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[31]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>32</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[28]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[28]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>29</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[30]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[30]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>31</div>
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
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[1]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[1]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>2</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[3]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[3]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>4</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[0]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[0]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>1</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[2]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[2]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>3</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[32]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[32]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>33</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[33]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[33]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>34</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[5]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[5]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>6</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[7]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[7]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>8</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[4]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[4]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>5</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[6]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[6]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>7</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[34]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[34]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>35</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[35]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[35]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>36</div>
            </div>
            <div className="choosing-place-box__item__map__part-3 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[9]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[9]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>10</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[11]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[11]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>12</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[8]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[8]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>9</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[10]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[10]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>11</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[36]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[36]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>37</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[37]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[37]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>38</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[13]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[13]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>14</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[15]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[15]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>16</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[12]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[12]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>13</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[14]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[14]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>15</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[38]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[38]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>39</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[39]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[39]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>40</div>
                </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[17]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[17]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>18</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[19]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[19]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>20</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[16]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[16]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>17</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[18]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[18]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>19</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[40]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[40]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>41</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[41]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[41]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>42</div>
            </div>
            <div className="choosing-place-box__item__map__part-4 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[21]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[21]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>22</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[23]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[23]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>24</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[20]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[20]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>21</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[22]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[22]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>23</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[42]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[42]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>43</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[43]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[43]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>44</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[25]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[25]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>26</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[27]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[27]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>28</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[24]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[24]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>25</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[26]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[26]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>27</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[44]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[44]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>45</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[45]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[45]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>46</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts">
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[29]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[29]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>30</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[31]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[31]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>32</div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[28]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[28]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>29</div>
                <div className="choosing-place-box__item__map__part__sit"></div>
                <div className="choosing-place-box__item__map__part__sit" style={{backgroundColor: places?.[30]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[30]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>31</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[46]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[46]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>47</div>
                <div className="choosing-place-box__item__map__part__sit third-cl-mod" style={{backgroundColor: places?.[47]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[47]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>48</div>
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
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[1]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[1]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>2</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[3]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[3]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>4</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[0]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[0]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>1</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[2]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[2]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>3</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-end"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[33]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[33]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>34</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[32]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[32]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>33</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[34]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[34]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>35</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[5]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[5]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>6</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[7]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[7]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>8</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[4]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[4]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>5</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[6]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[6]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>7</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[35]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[35]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>36</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[37]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[37]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>38</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[36]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[36]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>37</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[38]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[38]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>39</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[9]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[9]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>10</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[11]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[11]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>12</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[8]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[8]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>9</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[10]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[10]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>11</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[39]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[39]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>40</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[41]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[41]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>42</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[40]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[40]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>41</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[42]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[42]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>43</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[13]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[13]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>14</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[15]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[15]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>16</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[12]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[12]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>13</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[14]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[14]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>15</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[43]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[43]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>44</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[45]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[45]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>46</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[44]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[44]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>45</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[46]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[46]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>47</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[17]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[17]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>18</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[19]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[19]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>20</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[16]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[16]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>17</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[18]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[18]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>19</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[47]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[47]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>48</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[49]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[49]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>50</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[48]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[48]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>49</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[50]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[50]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>51</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[21]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[21]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>22</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[23]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[23]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>24</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[20]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[20]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>21</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[22]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[22]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>23</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[51]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[51]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>52</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[53]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[53]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>54</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[52]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[52]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>53</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[54]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[54]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>55</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[25]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[25]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>26</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[27]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[27]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>28</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[24]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[24]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>25</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[26]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[26]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>27</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[55]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[55]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>56</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[57]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[57]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>58</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[56]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[56]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>57</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[58]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[58]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>59</div>
            </div>
            <div className="choosing-place-box__item__map__part-2 map-parts-fourth">
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[29]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[29]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>30</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[31]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[31]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>32</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod"style={{backgroundColor: places?.[28]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[28]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>29</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[30]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[30]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>31</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-big-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[59]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[59]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>60</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-end"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[60]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[60]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>61</div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod-space"></div>
                <div className="choosing-place-box__item__map__part__sit fourth-cl-mod" style={{backgroundColor: places?.[61]?.available ? '#F3F3F3' : '#C4C4C4', color: places?.[61]?.available ? '#000000' : '#ffffff'}} onClick={(e) => {addPlace(e.currentTarget)}}>62</div>
            </div>
        </div>
        )
    }

    return map;
}