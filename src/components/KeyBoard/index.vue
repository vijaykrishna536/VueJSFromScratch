<template>
    <div class="main" v-on:="called($event)">
        <h1> KeyBoard Mapping </h1>
        <h4> Tracking your Keyboard... </h4>
        <div class="table">
            <table>
                <thead>
                    <th>Key</th>
                    <th>Code</th>
                    <th>Alt</th>
                    <th>Ctrl</th>
                    <th>Meta</th>
                    <th>Shift</th>
                    <th>Repeat</th>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script src="./KeyBoard.js"></script>

<style scoped>
.main {
    margin: auto; 
    border: 3px solid #1c8ae4;
    padding: 10px;
    width: 70%;
    border-radius:25px;
}

.main h1 {
    margin-bottom: 1px; 
}

.main h4 {
    margin-top: 1px; 
}
.table {
  background-color: #F1C40F;
  text-align: center;
  font-family: "Courier New";
}

.table table {
  border: 20px solid white;
  margin: 30px;
  padding: 30px;
  color: white;
  font-size: 1.5rem;
  outline: none;
  cursor: pointer;
  background-color: #2274A5;
}

.table th, td {
  padding: 20px
}
</style>