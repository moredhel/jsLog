jsLog
=====

very simple javascript logger

Usage is simple:

    log(message, level);
    
**message**: any arbitrary string/object  
**level**: user defined level (defaults to `INFO`). has reserved words `ERROR` and `LOG`.
  
    log();
    
this returns all the logs in an object array of the form {msg: 'string', lvl: 'INFO'}.
