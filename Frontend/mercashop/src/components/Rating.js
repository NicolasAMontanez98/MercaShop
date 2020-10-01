import React from 'react'

export default function Rating(props) {
  console.log(props);
  console.log(typeof props);
  return (
    !props.value ? <div>
      <span><i className='fa fa-star-o'></i></span>
      <span><i className='fa fa-star-o'></i></span>
      <span><i className='fa fa-star-o'></i></span>
      <span><i className='fa fa-star-o'></i></span>
      <span><i className='fa fa-star-o'></i></span>
    </div> :
      <div>
        <div>
          <span>
            <i className={props.value >= 1 ?
              'fa fa-star' : 
              props.value >= 0.5 ? 
                'fa fa-star-half-o' : 
                'fa fa-star-o'}
            ></i>
          </span>
          <span>
            <i className={props.value >= 2 ?
              'fa fa-star' : 
              props.value >= 1.5 ? 
                'fa fa-star-half-o' : 
                'fa fa-star-o'}
            ></i>
          </span>
          <span>
            <i className={props.value >= 3 ?
              'fa fa-star' : 
              props.value >= 2.5 ? 
                'fa fa-star-half-o' : 
                'fa fa-star-o'}
            ></i>
          </span>
          <span>
            <i className={props.value >= 4 ?
              'fa fa-star' : 
              props.value >= 3.5 ? 
                'fa fa-star-half-o' : 
                'fa fa-star-o'}
            ></i>
          </span>
          <span>
            <i className={props.value >= 5 ?
              'fa fa-star' : 
              props.value >= 4.5 ? 
                'fa fa-star-half-o' : 
                'fa fa-star-o'}
            ></i>
          </span>
        </div>
        <div>
          <span>
            {props.text ? props.text : ''}
          </span>
        </div>
      </div>      
  )
}