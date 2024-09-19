function findCount(languages) {
  
    let obj = {};
    let count =1;
  
    for (let i = 0; i < languages.length; i++) {
      let languagecount = languages[i].language;
      console.log(languagecount);
    
      if(obj[languagecount])
      {
        count++;
      }
      else{
        obj[languagecount] = 1;
      }
    }
    console.log(obj);
  }
  
  const languages = [
      { language: 'JavaScript' },
      { language: 'JavaScript' },
      { language: 'TypeScript' },
      { language: 'C++' }
  ];
  const result = findCount(languages);
  console.log(result);
  
  
  // Output
  
  // [
  //   { language: 'JavaScript', count: 2 },
  //   { language: 'TypeScript', count: 1 },
  //   { language: 'C++', count: 1 }
  // ]