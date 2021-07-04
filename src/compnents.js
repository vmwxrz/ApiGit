import React, {useState, useEffect} from 'react';
import { useFetchImg } from './Hooks/useFetchImg';

export const GifExperApp = () =>{
    return(
      <>
          <h1>
            GifEx
          </h1>
        
          <Lista/>
          
      </>
    );
}

const Lista = () =>{
    
const [Cate, setCate] = useState([]);

        return(
            <>
                <AddCategory setCategories={setCate}/>
                <hr />
                <div className="allcon">
                    
                    {
                        Cate.map(v => <Categry category={v} key={v}/>)
                    }
                    
                </div>
                <Footer/>
            </> 

        );
}

const AddCategory  = ({setCategories}) =>{
    
    const [value, setValue] = useState("");

    const change = (e)=>{
        setValue(e.target.value);
    }

    const onSub = (e)=>{
        e.preventDefault();
        if(value.trim().length > 0){
            setCategories( v => [ value,...v,]);
            resert();
        }
        
    }

    const resert = ()=>{
            setValue("");
    }
    
    return(
            <form onSubmit={onSub}>
                <input type="text" value={value} onChange={change} placeholder="Agregar una categoria"/>
            </form>
    );
    

}

const Categry =({category}) => {

    
    const {data, loading} = useFetchImg(category);
    return(
        <>
            <h2>Resultados para {category}</h2>
            <hr/>
            <div className="row " style={{overflow: "hidden"}}>
                {
                    loading ? <div className="load animate__animated animate__flash">loadding</div> : data.map((v ,i) => {
                        return <ImgCad className="" Img={v.Url} Title={v.Title} key={category+i}/>
                        
                    })  
                }
                
            </div>
        </>
    );
}

const ImgCad = ({Img = '', Title =''})=>{
    return( 
        <div  className="Img animate__animated animate__fadeInDown">
            <div className="conten">
                <div className="pp">
                    <p>{Title}</p>
                </div>
                <div className="imgg">
                    <img src={Img}/>
                </div>
            </div>
        </div>
        
    );
}


const Footer = () =>{

    return(
        <footer>
            <hr/>
            <p>My App</p>
        </footer>
    );
}


const Modal =  ({Img, setVisible: setVisibleModal = true}) =>{

    const [Visible, setVisible] = useState(setVisibleModal);

    const altern = () => {
        setVisible(!Visible);
    }

    return <div onClick={altern} className="modal" id="modal1" style={Visible? {visibility: "visible"} : {visibility: "hidden"}}>
        <div className="showImg">
            <img src={Img}/>
        </div>
    </div>;
}