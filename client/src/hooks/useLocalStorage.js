import { useEffect, useState } from 'react'

const PREFIX = "whatsapp-clone-"

export default function useLocalStorage(key, initialValue) {
   const prefexedKey = PREFIX + key
   const [value, setValue] = useState(() => {
      const jsonValue = localStorage.getItem(prefexedKey)
      if (jsonValue !== 'undefined') return JSON.parse(jsonValue)
      console.log(jsonValue);
      console.log(typeof jsonValue);
      if (typeof initialValue === 'function') {
         return initialValue();
      } else {
         return initialValue
      }
   })

   useEffect(() => {
      localStorage.setItem(prefexedKey, JSON.stringify(value))
   }, [prefexedKey, value]);

   return [value, setValue]
}  
