<template>
<div class="user-profile">
    <h1>User Profile Page</h1>
    <div class="card col-5">
    <img v-bind:src="user?.imgURL" class="card-img-top" alt="Profile Picture" />
    <div class="card-body">
        <p class="name">{{ user?.firstName }}</p>
        <p class="last">{{ user?.lastName }}</p>
        <p class="email">{{ user?.emailAdd }}</p>
        <p class="province">{{ user?.province }}</p>
    </div>
    </div>
</div>
</template>

<script>
export default {
props: ["id"],
computed: {
    user() {
    return this.$store.state.user;
    },
},
created() {
    this.$store.dispatch("userProfile", this.id);
},
};
</script>

<style>
.user-profile {
background: linear-gradient(to bottom, #222, #333);
color: #fff;
}

.card {
background-color: #1a1a1a;
border-radius: 10px;
margin-bottom: 20px;
}

.card-img-top {
border-radius: 10px 10px 0 0;
}

.card-body {
padding: 20px;
}

.name {
font-size: 24px;
font-weight: bold;
margin-bottom: 5px;
}

.last {
font-size: 18px;
margin-bottom: 10px;
}

.email,
.province {
font-size: 16px;
margin-bottom: 10px;
}

.email:before,
.province:before {
content: attr(class) ": ";
font-weight: bold;
}

.email {
color: #1e90ff;
}

.province {
color: #00bfff;
}
</style>
