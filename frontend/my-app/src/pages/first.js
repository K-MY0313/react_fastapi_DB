import React from 'react';
import { Link } from 'react-router-dom';

function SelectionPage() {
  return (
    <div>
      <h1>モードを選択してください</h1>
      <div>
        <Link to="/get" >
          データベースの入力
        </Link>
        <br />
        <Link to="/post">
          データベースの検索
        </Link>
      </div>
    </div>
  );
}
export default SelectionPage;