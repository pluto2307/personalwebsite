var app = document.getElementById("app")

app.innerHTML = `<div>
                    <div class="loader"></div>
                </div>

                <main class="flex-grow md:flex">
                    <div class="absolute p-16 inset-0 flex items-center">
                        <div class="navbar py-2 px-3">
                            <a id="theme-button" class="navbar-item rounded-full mr-1 social-button-color" href="" target="_blank"><i class="fa-solid fa-apple-core"></i></a>
                        </div>
                        
                        <div class="w-full text-left">
                            <div class="font-bold text-4xl main-text-color">suyash raj</div>
                            <div class="font-normal text-x2 description-color">
                                Hey! I'm a developer, student & designer.
                            </div>
                            <div class="mt-2 mr-10 font-semibold text-sm">
                                <a href="https://github.com/pluto2307" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-github mr-1"></i>pluto2307
                                </a>
                                <a href="https://discord.com/users/552888530314199051" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-discord mr-1"></i>PhantomWolf#0771
                                </a>
                                <a href="https://open.spotify.com/user/1y727wyk0juynd7lf4cbping7" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-spotify mr-1"></i>Suyash Raj
                                </a>
                                <a href="https://www.youtube.com/channel/UC2b7mxUjEK_S3W2o-le5mbg" target="_blank" class="mt-2 mr-4 inline-block social-button-color social-button">
                                    <i class="fab fa-youtube" mr-1"></i> YouTube
                                </a>
                            </div>
                            <div id="statusContent" class="mt-2 mr-10 font-semibold text-sm rounded-md">
                                <div id="discordContent" class="font-bold text-x1 description-color"></div>
                                <div id="spotifyContent" class="font-bold text-x1 description-color"></div>
                            </div>
                        </div>
                    </div>
                </main>
                `

$(window).on("load", function() {
    $(".loader").fadeOut("slow");
});