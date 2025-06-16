export default function TabButton({ onSelect, children, isSelected }) {
  return (
    <li>
      <button className={isSelected ? "active" : ""} onClick={onSelect}>
        {children}
      </button>
    </li>
  );
}

//extra way//
// export default function TabButton({  children, isSelected,...props }) {
//   return (
//     <li>
//       <button className={isSelected ? "active" : ""} {...props}>
//         {children}
//       </button>
//     </li>
//   );
// }
