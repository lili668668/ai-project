<template>
    <nav class="navbar navbar-expand-lg navbar-light top big">
        <a class="navbar-brand brand" href="/">認養專家</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#topnav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="topnav">
            <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="/animals">動物一覽</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/facts">事實一覽</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/rules">規則一覽</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
}
</script>

<style lang="css">
.brand {
  font-size: 50px;
}
.big {
  font-size: 30px;
}
.top {
  z-index: 200;
  background-color: white;
}
.pad {
    padding-left: 10px;
    padding-right: 10px;
}
</style>
