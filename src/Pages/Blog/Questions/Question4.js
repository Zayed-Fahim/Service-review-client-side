import React from 'react';

const Question4 = () => {
    return (
        <div className='container mx-auto mb-10'>
            <h1 className='text-2xl font-bold mb-3'>4.How NodeJS handle multiple client requests?</h1>
            <h1 className='text-xl font-semibold mb-3'>Ans:</h1>
        <p className='text-[18px] font-semibold'>
          NodeJS receives multiple client requests and places them into
          EventQueue. NodeJS is built with the concept of event-driven
          architecture. NodeJS has its own EventLoop which is an infinite loop
          that receives requests and processes them. EventLoop is the listener
          for the EventQueue. If NodeJS can process the request without I/O
          blocking then the event loop would itself process the request and
          sends the response back to the client by itself. But, it is possible
          to process multiple requests parallelly using the NodeJS cluster
          module or worker_threads module.
        </p>
      </div>
    );
};

export default Question4;