import './App.css';

function App() {
  return (
    <div>
      <header className="d-flex align-items-center py-3 px-4 justify-content-between">
        <div className="d-flex align-items-center column-gap-2 opacity-50">
        <svg className='opacity-50' xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
          <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
          <p>Overview Page</p>
          </div>

          <div className='d-flex opacity-50 column-gap-4'>
          <button className='btn bg-secondary-subtle rounded-5 menu'><svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 576 512"><path d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"/></svg></button>

          <button className='btn rounded-5 menu'><svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/></svg></button>

          <button className='btn rounded-5 menu'><svg xmlns="http://www.w3.org/2000/svg" height="0.875em" viewBox="0 0 384 512"><path d="M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM224 448a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM304 64H80V384H304V64z"/></svg></button>
          </div>

          <div className="d-flex align-items-center  column-gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>

            <a href="" className='a menu p-1 px-3 rounded-2 ms-3 bg-danger-subtle text-danger'><img src="https://github.com/StartBootstrap/startbootstrap-shop-homepage/archive/gh-pages.zip" alt="" /><svg xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 512 512"><path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>Free download</a>
            <div className="x btn py-1">x</div>
          </div>
      </header>

      <div className="header2 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center column-gap-3">
          <a className="me-5 fs-5" href="">Start Bootstrap</a>
          <a className='menu opacity-50' href="">Home</a>
          <a className='menu opacity-50' href="">About</a>
          <div href="" class="menu dropdown-toggle">Shop</div>
        </div>
        <button type="button" class="btn btn-outline-dark menu"><svg className='me-3' xmlns="http://www.w3.org/2000/svg" height="0.75em" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>Cart <span className='px-2 ms-2 bg-black rounded-5 text-white'>0</span></button>
        <button className='toggle btn border'>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <section className='main1 bg-dark text-white text-center'>
        <h1>Shop in style</h1>
        <p className='fs-5 opacity-50'>With this shop hompeage template</p>
      </section>

    <div className="container-fluid">
       <div className="row text-center justify-content-center gap-5">
        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>

        <div className="col-5 col-lg-2 p-0 border rounded-3">
          <img className='w-100' src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="" />
          <h5 className='mt-4'>Fancy Product</h5>
          <p>$40.00 - $80.00</p>
          <button type="button" class="btn btn-outline-dark mt-5 mb-4">View options</button>
        </div>
       </div>
     </div>
     <footer className='bg-dark text-white text-center p-5'>
        <p>Copyright © Your Website 2023</p>
      </footer>
    </div>
  );
}

export default App;
